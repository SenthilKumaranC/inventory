const HomeIcon = () => {
  return (
    <svg
      className="w-3 h-3 mr-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  )
}

const FirstEnabled = (props: any) => {
  return (
    <li className="inline-flex items-center">
      <a
        onClick={props.onClick}
        href="#"
        className="ml-1 inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      >
        All
      </a>
    </li>
  )
}

const FirstDisabled = () => {
  return (
    <li className="inline-flex items-center">
      <a
        href="#"
        className="ml-1 inline-flex items-center text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >
        All
      </a>
    </li>
  )
}

const Middle = (props: any) => {
  return (
    <li>
      <div className="flex items-center">
        <BreadcrumbDivider></BreadcrumbDivider>
        <a
          onClick={props.onClick}
          href="#"
          className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
        >
          {props.children}
        </a>
      </div>
    </li>
  )
}

const Last = (props: any) => {
  return (
    <li aria-current="page">
      <div className="flex items-center">
        <BreadcrumbDivider></BreadcrumbDivider>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          {props.children}
        </span>
      </div>
    </li>
  )
}

const BreadcrumbDivider = () => {
  return (
    <svg
      className="w-3 h-3 mx-1 text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  )
}

const TagsBreabcrumbs = (props: any) => {
  const { levels, setLevel } = props
  return (
    <nav className="flex px-5 py-3" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {levels.length === 1 && <FirstDisabled></FirstDisabled>}
        {levels.length > 1 && (
          <FirstEnabled onClick={() => setLevel(levels[0])}></FirstEnabled>
        )}
        {levels.length > 2 &&
          levels.slice(1, levels.length - 1).map((level: any) => {
            return (
              <Middle key={level.level} onClick={() => setLevel(level)}>
                {level.parentName}
              </Middle>
            )
          })}
        {levels.length > 1 && (
          <Last>{levels[levels.length - 1].parentName}</Last>
        )}
      </ol>
    </nav>
  )
}

export default TagsBreabcrumbs
