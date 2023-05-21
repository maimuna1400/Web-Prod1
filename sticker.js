(async function() {
                
				//set vars, perform query and return the data
				const apiEndpointBaseURL = 'https://api.giphy.com/v1/gifs/search?api_key=KHq7Wz5EoprM2tWlwd1LuEyTbmBAbPbl&q=otter&limit=25&offset=0&rating=g&lang=en'; //sets the endpoint
				const queryString = {                                           //sets the parameters of the query
					api_key: 'KHq7Wz5EoprM2tWlwd1LuEyTbmBAbPbl',
                    limit: 25,
                    offset:0,
                    rating: 'g',
				};
                
                let recNum = 0; //set initial record number
                let theData; //create empty object
                
				function updateData() { //display first record in the array
					const theQuery = Object.keys(queryString) //concatenate the queryString
						.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(queryString[k]))
						.join('&');
						
					return fetch(apiEndpointBaseURL + theQuery) //permissionlevel indicates no copyright issues
                        .then(function(response){return response.json()}) // .then(response => response.json())
                        .then(function(responseJson){return theData = responseJson}) //.then(responseJson => theData = responseJson)
						.catch(function(theErrors){console.log("oh no an error! " + theErrors);})
						.then(function(){console.log(theData); 
                                         //console.log(theData.data[recNum].images.downsized.url);
                                         displayImg();
                                        });
                }
				
                updateData();

                async function getValidRecord() {
					if(recNum >= theData.data.length){
						recNum = 0;
						queryString.offset+=5;
						await updateData();
					}
					if (!theData.data[recNum]) {
						console.log("failed to find valid record");
						return null;
					}
					if (!theData.data[recNum].images.downsized.url) {
						console.log("entry skipped/no image url!"); 
						recNum++;
						return getValidRecord();
					}
					return theData.data[recNum];
				}
				
				async function displayImg() {
					const aRecord = await getValidRecord();
					if (!aRecord) {return;}
					document.getElementById("showImg").src = aRecord.images.downsized.url;          //display img
					//document.getElementById("title").innerHTML = record.title; 
					console.log(recNum, aRecord.images.downsized.url);                            //log what is being seen
				}
				
				//click button to show next image in array. 
				document.getElementById("nextBtn").addEventListener("click", () => nextImg());
            
				async function nextImg() {                                                    
                    recNum++;
					await displayImg();
                }
            })();