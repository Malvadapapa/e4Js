const HAS_NOT_ERROR = (value)=> {
    let error = false
    
   if(value === ""){
     errContainer.innerHTML = "El input esta vacio"
     return
   }
   errContainer.innerHTML = ""
   return error = true
   }

export default HAS_NOT_ERROR