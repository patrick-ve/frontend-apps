url = `https://stx.staging.skbx.io/api/v1/careers/our-culture`;
url2 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query={++++++++++++++++++++PREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0A++++++++++++++++++++SELECT+*+WHERE+%7B%0D%0A++++++++++++++++++++%3Fsub+dct%3Acreated+%221990%22+.%0D%0A++++++++++++++++++++%7D+LIMIT+50}&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
items = []
responseData: object[];
query = String `
                PREFIX dct: <http://purl.org/dc/terms/>
                SELECT * WHERE {
                ?sub dct:created "1893" .
                } LIMIT 1000
            `

constructor(private http: HttpClient) {
        this.http.get(this.url2).subscribe(response => {
            const responseData = response
            // console.table(responseData);

            // for (let name in responseData)
            // if (responseData.hasOwnProperty(name))
            //     this.items.push(responseData[name])

            // console.table(this.responseData)
            console.log(responseData)
            // console.log(this.items[0][0].components[0].name)
            // console.log(this.query)
            console.log(('b' + 'a' + +'a' + 'a' + 's').toLowerCase());
        })
