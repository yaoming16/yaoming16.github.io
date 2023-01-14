import Title from './Title'
import MainCard from "./MainCard"
import { v4 as uuidv4 } from 'uuid';
import iconsVar from '../variables/iconsVar'


function Tecnologies() {
  return (
    <>
      <Title text="I Work With:" />

      <div className={`grid grid-auto-fit-[85px] md:grid-auto-fit-[100px] gap-3 sm:gap-5 ml-auto mr-auto`}>
        {iconsVar.map((item) => {
          return <MainCard text={item[1]} link={item[0]} key={uuidv4()} />
        })}
      </div>
    </>
  )
}

export default Tecnologies