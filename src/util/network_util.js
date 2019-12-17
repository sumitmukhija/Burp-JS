export const urlCreater = (BASE_URL, API_KEY, latitude = 53.3498, longitude = 6.2603, RADIUS = 10000, type = "food") =>
{
    if(!API_KEY || !BASE_URL){
        // TODO: Return error
    }
    return BASE_URL+'/json?key='+API_KEY+'&location='+latitude+","+longitude+"&radius="+RADIUS+"&opennow&type="+type;
}