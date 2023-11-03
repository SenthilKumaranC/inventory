import { ReactElement, useCallback, useMemo, useState } from "react"
import Tag from "../Tag/Tag"
import TagsBreabcrumbs from "../TagsBreadcrumbs/TagsBreadcrumbs"
import { useGetTagsQuery } from "../../features/tags/tags.query"

export interface ILevel {
  level: number
  parentName: string
}

const Tags = () => {
  const [currentId, setCurrentId] = useState("")
  const [prevIds, setPrevIds] = useState<string[]>([])
  const [openSorry, setOpenSorry] = useState<boolean>(false)

  const [levels, setLevels] = useState<ILevel[]>([
    { level: 0, parentName: "All" },
  ])
  const { data: tags } = useGetTagsQuery()

  const setLevel = useCallback(
    (level: ILevel) => {
      const index = levels.findIndex((levelLocal) => levelLocal === level)
      const lastId = prevIds[index]
      setPrevIds((prevIds) => prevIds.slice(0, index))
      setLevels((levels) => levels.slice(0, index + 1))
      setCurrentId(lastId)
    },
    [levels, prevIds],
  )

  const hasChildTags = useCallback(
    (tagId: string) => {
      if (tags) {
        for (let tagIndex = 0; tagIndex < tags.length; tagIndex++) {
          const tag = tags[tagIndex]
          if (tag.parentId === tagId) {
            return true
          }
        }
      }
      return false
    },
    [tags],
  )
  const setCurrentIdHandler = useCallback(
    (tagId: string, level: ILevel) => {
      const flag = hasChildTags(tagId)
      if (flag) {
        setPrevIds((prevIds) => [...prevIds, currentId])
        setCurrentId(tagId)
        setLevels((prevLevels) => [...prevLevels, level])
      } else {
        setOpenSorry(true)
      }
    },
    [currentId, hasChildTags],
  )

  const currentTags = useMemo(() => {
    if (!tags) return <>No Tags</>
    const filteredTags: ReactElement[] = []
    tags.forEach((tag) => {
      if (tag.parentId === currentId) {
        filteredTags.push(
          <Tag
            key={tag.id}
            tag={tag}
            setCurrentIdHandler={setCurrentIdHandler}
          ></Tag>,
        )
      }
    })
    if (filteredTags.length > 0) {
      return (
        <>
          <div className="shadow-md grid grid-cols-1 divide-y">
            {filteredTags}
          </div>
        </>
      )
    } else {
      return <>No Tags</>
    }
  }, [currentId, setCurrentIdHandler, tags])

  return (
    <>
      <div className="grid grid-cols-[1fr_100px]  text-gray-700 border border-gray-200  bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <TagsBreabcrumbs levels={levels} setLevel={setLevel}></TagsBreabcrumbs>
        {levels.length > 1 && (
          <button
            className="w-full h-full"
            onClick={() => {
              setLevel(levels[levels.length - 2])
            }}
          >
            Back
          </button>
        )}
      </div>

      {currentTags}
      <dialog
        className="w-full h-full absolute left-0 top-0 bg-transparent"
        open={openSorry}
      >
        <div className="w-full h-full bg-gray-500/25 flex items-center justify-center">
          <div className="shadow-md w-11/12 h-1/4 bg-white  flex items-center justify-center flex-col gap-10">
            <p> Sorry , there are no further items</p>
            <form
              method="dialog"
              onSubmit={(e) => {
                e.preventDefault()
                setOpenSorry(false)
              }}
            >
              <button>OK</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Tags
