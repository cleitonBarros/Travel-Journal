import Aos from 'aos'
import 'aos/dist/aos.css'


Aos.init({
    duration: 1500,
    anchorPlacement: 'top-top'
    
})

export const AosRefresh =()=> Aos.refreshHard();


export default Aos