function p( url,
    type='GET',
    data,
    datatype='json',
    header){
    return new Promise((res,err)=>{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(type,url),
        xmlHttp.responseType = datatype;
        xmlHttp.setRequestHeader("Accept", "application/json")
         if(type == 'GET'){
            xmlHttp.send(null)
        }else{
            xmlHttp.send(data)
        }

        xmlHttp.onreadystatechange = function() { 
            if(xmlHttp.readyState != 4){
                return
            }
        if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) { 
            res(xmlHttp.response)
        } else { 
            err(new Error(xmlHttp.statusText))
        } 
    } 
    })
 }
 p('http://api.bodesports.com/api/v1/Match/GetRecommendMatchItem?index=1&count=4').then(
    function(res){
        console.log(res)
    },
    function(err){
        console.log(err)
    }
)


