import React, { useEffect, useState } from "react";

const TestComponent = () => {
  const [data, setData] = useState([]);

  const url =
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

  const fetchData = async () => {
    try {
      const res = await fetch(url)
      const jsonFile = await res.json();

      if (res.status !== 200) {
        throw new Error("Network response was not ok");
      }

      setData(jsonFile)

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
  <div className="flex flex-wrap gap-2 mt-20">
      {data.map((element: any) => 
            <div key={element.id} >
                  <img 
                    src={element.url} alt={element.id}
                    className="h-72 w-80"
                  />
                  <h2>{element.id}</h2>
            </div>
      )}
  </div>
);
};

export default TestComponent;
