var allData = [];
var httpReq = new XMLHttpRequest();


function getData()
{

    httpReq.open("GET",  "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2ufqCGbRrpvJ2FBqhCMoo4db44TRA7GJ-1j_VaoXtd66iwBkdoeVRy8hI" ) // hatft7 tari2 bena w ben eltanyeen
    httpReq.send(); // hatb3t 3arbia nos na2l t7ml eldata
    httpReq.onreadystatechange = function()
    {
        if(httpReq.readyState == 4 && httpReq.status == 200)
        {
            
    
            allData =  JSON.parse( httpReq.response).results; // di hat4il eldata ely rag3a
            displayData();
        }
    }
    








}
getData();
function displayData()
{
    var temp = ``;
    
    for(var i = 0 ; i <allData.length ; i++)
    {
        temp +=`
        <div class="card shadow my-4 py-4" >

                        <div ">
                       <!-- <a [routerLink]="['/post',posts[i].id]">-->
                        <div class=" d-flex align-content-start align-items-center">

                            <!-- <img src="assets/profile-small-32.jpg" class="rounded-circle"> -->
                            
                           
                            <img
                            src="assets/profile-small-27.jpg" class="  rounded-circle thum"></div>

                            <div class="">
                                <p> `+allData[i].title+`</p>
                                <p>release_date:`+allData[i].release_date+`</p>
                                <p><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>


                        </div>
                        <div *ngIf="posts" class="card-body pb-0">
                            <p>`+allData[i].overview+`</p>

                           
                            <img src=" https://image.tmdb.org/t/p/w500`+allData[i].poster_path+`" class=" card-img-top mt-3"/>
             
                        </div>

                        <div class="footer p-5 pt-0">
                            <div class="likes float-left">
                                <i class="fas fa-heart"></i>
                                You and 206 people like this


                            </div>


                            <div class="comments float-right">
                                41
                                <i class="fas fa-comment-alt"></i>
                                07
                                <i class="fas fa-share-alt"></i>



                            </div>
                        </div>
                    </a>
                </div>
                    </div>
               `;
    }
    
    
    document.getElementById("rowData").innerHTML = temp;
}

console.log(httpReq.readyState);






function searchproduct( name)
     {


    var temp=``;
    for (var i=0; i<allData.length ;i++)
      {
          if (allData[i].title.toLowerCase().includes(name.toLowerCase()))

          {  temp +=`
          <div class="col-md-4  ">
            <div class="item ">
            <img src=" https://image.tmdb.org/t/p/w500`+allData[i].poster_path+`" class="  cli img-fluid"/>
              
            <div class="titel m-auto text-center">
              
            <h1>`+allData[i].title+`</h1>
  
            <p>`+allData[i].overview+`</p>
            <h6>`+allData[i].vote_average+`</h6>
            <h6>`+allData[i].release_date+`</h6>
            
            </div>
            </div>
           
          </div>`;
                 
        


          }




      }

      document.getElementById("rowwData").innerHTML=temp;

     }










     function searchproduct( name)
     {


    var temp=``;
    for (var i=0; i<allData.length ;i++)
      {
          if (allData[i].overview.toLowerCase().includes(name.toLowerCase()))

          {  temp +=``
          
          ;
                 
        


          }




      }

      document.getElementById("rowwData").innerHTML=temp;

     }




