const readTextFile = (event) => {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const content = e.target.result;
          resolve(content);
        };
        reader.onerror = function (e) {
          reject(e.target.error); 
        };
        reader.readAsText(file);
      } else {
        reject("No file selected.");
      }
    });
  };
  
  export default readTextFile;
  