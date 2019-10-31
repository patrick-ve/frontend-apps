export const people = [
    {
        name: 'Javanen',
        location: 'Java',
        termmasterQuery:
            'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0ASELECT+%3Fobj+%3Flink+%3Ftitle+WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+dc%3Asubject+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster4871%3E+.%0D%0A%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A+%0D%0ALIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on',
        description:
            'Javaanse mensen zijn voornamelijk woonachtig in Centraal- en Oost-Java. Met ruim 100 miljoen mensen vormen zij ruim 40% van de totale populatie van Indonesië. De Javanen zijn de facto politieke heersers over Indonesië, omdat zij vaak hoge posities binnen de regering bekleden.'
    },
    {
        name: 'Balinezen',
        location: 'Bali',
        termmasterQuery:
            'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0ASELECT+%3Fobj+%3Flink+%3Ftitle+WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+dc%3Asubject+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster4849%3E+.%0D%0A%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A+%0D%0ALIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on',
        description:
            'Balinezen hangen in het algemeen het hindoeïstische geloof aan en zijn gesitueerd op het eiland Bali. Het Balinees is ook een andere taal dan het Bahasa Indonesia.'
    },
    {
        name: 'Tenggerezen',
        location: 'Oost-Java',
        termmasterQuery:
            'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0ASELECT+%3Fobj+%3Flink+%3Ftitle+WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+dc%3Asubject+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster4812%3E+.%0D%0A%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A+%0D%0ALIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on',
        description:
            'Deze bevolkingsgroep - bestaande uit slechts 100.000 personen - zijn een Javaanse etnische groep, waarvan beweerd wordt dat men afstammelingen zijn van de Javaanse prinsen van de Majapahit-dynastie. Leven erg afgezonderd in de Tengger bergen in Oost-Java.'
    },
    {
        name: 'Madurezen',
        location: 'Oost-Java',
        termmasterQuery:
            'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0ASELECT+%3Fobj+%3Flink+%3Ftitle+WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+dc%3Asubject+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster4809%3E+.%0D%0A%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A+%0D%0ALIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on',
        descripton:
            'Oorspronkelijk komt deze bevolkingsgroep van het eiland Madura, gelegen aan de kust van Oost-Java. Momenteel vormen zijn de op drie na grootste bevolkingsgroep van Indonesië.'
    },
    {
        name: 'Ambonezen',
        location: 'Ambon',
        termmasterQuery:
            'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0ASELECT+%3Fobj+%3Flink+%3Ftitle+WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+dc%3Asubject+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster4818%3E+.%0D%0A%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A+%0D%0ALIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on',
        description:
            "Ambonezen wonen op het eiland Ambon, gelegen in de Molukken ten noord-oosten van Indonesië. Men woont in traditionele gemeenschappen genaamd 'Negri'."
    },
    {
        name: 'Sasak',
        location: 'Lombok',
        termmasterQuery:
            'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0ASELECT+%3Fobj+%3Flink+%3Ftitle+WHERE+%7B%0D%0A++%3Fobj+edm%3AisShownBy+%3Flink+.%0D%0A++%3Fobj+dc%3Atitle+%3Ftitle+.%0D%0A++%3Fobj+dc%3Asubject+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster4751%3E+.%0D%0A%0D%0A++FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%7D%0D%0A+%0D%0ALIMIT+1000&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on',
        description:
            'Sasak mensen zijn gerelateerd aan Balinese mensen, maar hangen voornamelijk de islam aan als geloof. Er is weinig bekend over de oorsprong van deze bevolkinsgroep.'
    }
]
