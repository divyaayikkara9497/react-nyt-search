import axios from "axios";

export default {
  // Query NYT API
  searchNYT: function(topic, startYear, endYear) {
    const authKey = "2b8c260c46844e3a9ad4365ca0f55f09";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },
  getArticle: function(){
    return axois.get("/api/articles");
  },
  getArticle: function(id){
    return axois.get("/api/articles" + id);
  },
  deleteArticle: function(id) {
    return axois.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData){
    return axios.post("/api/articles", articleData);
  }
}
