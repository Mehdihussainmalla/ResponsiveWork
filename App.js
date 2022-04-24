import React,{useEffect} from 'react'
import Routes from './src/navigation/Routes'
import strings from './src/constants/lang'



const App = () => {

  useEffect(()=>{
    getLanguage();

  },[])

  const   getLanguage= async () => {
    try {
      const lng = await AsyncStorage.getItem('language')
      console.log("Lnguage changed", lng)
      if (!!lng) {
        strings.setLanguage(lng)
      } else {
        strings.setLanguage('en')
      }
    } catch (error) {
      console.log("error occurred in ")
    }
  }

  return (
     
    <Routes/>
   
  )
}

export default App