const mapper={
    'gourav' : "https://github.com/gourav-pal",
    'x': "https://twitter.com/_Gourav_pal"
}

const urlParams=new URLSearchParams(window.location.search);// location.search erefers to the query string part of the URL.
const query=urlParams.get('q')                    //URLSearchParams- provides method to work with the query string of the URL

if(mapper[query]){
    window.location.href = mapper[query]
}