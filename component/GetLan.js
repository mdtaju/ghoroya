import { useEffect, useState } from "react";


const GetLan = () => {
      const [language, setLanguage] = useState("en");
      useEffect(() => {
            if (typeof window !== 'undefined') {
                  // Perform localStorage action
                  const item = localStorage.getItem('lan');
                  setLanguage(item);
            }
      }, [])
      return language
}

export default GetLan;