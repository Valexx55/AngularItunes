export interface SearchItem {
    
        artistName : string,
        artistViewUrl : string,
        artworkUrl30 : string,
        artworkUrl60 : string,
        artworkUrl100 : string,
        collectionArtistId : number,
        collectionArtistName : string,
        collectionCensoredName : string,
        collectionExplicitness : string,
        collectionId : number,
        collectionName : string,
        collectionPrice : number,
        collectionViewUrl : string,
        country : string,
        currency : string,
        discCount : number,
        discNumber : number,
        isStreamable : boolean,
        kind : string,
        previewUrl : string,
        primaryGenreName : string,
        releaseDate : string,
        trackCensoredName : string,
        trackCount : number,
        trackExplicitness : string,
        trackId : number,
        trackName : string,
        trackNumber : string,
        trackPrice : number,
        trackTimeMillis : number,
        trackViewUrl : string,
        wrapperType : string
  }

  export interface SearchItemReducido {
    
    artistName : string,
    artworkUrl100 : string,
    trackName : string,
    previewUrl : string
  
}

  export interface SearchResult {
     resultCount:number,
     results: Object[]
  }