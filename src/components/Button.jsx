export const Button = ({texto, setFilter}) => {

    const handleClick = () => {
        texto==='Active'
            ? 
        setFilter(1)
            : texto==='Completed'
                ?
            setFilter(2)
                :setFilter(0)
    }

  return (
    <>
        <button
            onClick={handleClick}
        >
            {texto}
        </button>
    </>
  )
}
