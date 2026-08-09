//UNTUK DIIMPORT KE HERO

const Button = ({children}) => {
  return (
        <button className="rounded-full bg-white px-8 py-3 font-semibold 
        text-black transition duration-300 hover:scale-105">
            {children}
        </button>
  )
}

export default Button
