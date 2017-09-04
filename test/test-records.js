var testRecords = [{
    input: "To facilitate the construction work for the Central-Wan Chai Bypass, certain traffic lanes of the Island Eastern Corridor (IEC) eastbound and Victoria Park Road eastbound near Victoria Park will be temporarily closed in stages from about 12.01 am on Saturday (19 August) to 10.00 am on Sunday (20 August). Appropriate traffic signs will be erected on site to guide motorists. Owning to the traffic lane closure, the traffic in the vicinity of IEC and Victoria Park Road would be relatively congested. Motorists are advised to drive with care and consider using alternative routes. Members of the public are advised to plan their journey early and allow more traveling time to cater for unexpected delay, and watch out for the latest traffic news through media. ",
    expectedTags: ['island eastern corridor',
        'sai wan ho',
        'eastern',
        'hong kong island',
        'victoria park road',
        'causeway bay',
        'wan chai',
        'central',
        'central and western'
    ]
}, {
    input: "The slow lane of Ching Cheung Road Tsuen Wan bound near So Uk which was closed due to vehicle breakdown is re-opened to all traffic.",
    expectedTags: ['ching cheung road',
        'lai chi kok',
        'cheung sha wan',
        'sham shui po',
        'kowloon',
        'tsuen wan',
        'new territories'
    ]
}, {
    input: "The fast lane of Tuen Mun Road Yuen Long bound near Sea Crest Villa which was closed due to traffic accident is re-opened to all traffic.\n\nTraffic queue takes time to disperse.",
    expectedTags: ['tuen mun road', 'tsuen wan', 'new territories', 'yuen long']
}, {
    input: "Part of the lanes of Fanling Highway Kowloon bound near Kau Lung Hang which was closed due to vehicle breakdown is re-opened to all traffic.\n\nTraffic queue takes time to disperse.",
    expectedTags: ['fanling highway', 'fanling', 'north', 'new territories', 'kowloon']
}, {
    input: "Due to heavy traffic, the following road sections are congested:  \n(i) Prince Edward Road East (Mong Kok bound); and  \n(ii) Kwun Tong By-Pass (Mong Kok bound).    \n\nMotorists passing through the above section of road are advised to drive with utmost care and patience, and consider using alternative routes.",
    expectedTags: ['prince edward road east',
        'san po kong',
        'mong kok',
        'wong tai sin',
        'yau tsim mong',
        'kowloon',
        'kwun tong'
    ]
}, {
    input: "To facilitate the third phase of road repair works at the Kowloon exit of Lion Rock Tunnel, the fast lane of Lion Rock Tunnel (Kowloon bound) from its toll plaza to Kowloon exit will be temporarily closed to all vehicular traffic from 11.00 pm tomorrow (19 August) to 4.30 am next Monday (21 August).\n\nThe Transport Department anticipates that the traffic at Lion Rock Tunnel Kowloon bound during the above period will be very congested. Motorists passing through the road section concerned are advised to be patient and drive with utmost care\n\nMotorists are also advised to consider using alternative routes such as Route 8 (Tsing Sha Highway), Shing Mun Tunnels, Tai Po Road or Tate’s Cairn Tunnel to Kowloon.\n\nCommuters taking public transport services are advised to use railway services or bus services via Route 8 (Tsing Sha Highway), Shing Mun Tunnels, Tai Po Road or Tate’s Cairn Tunnel to Kowloon. Early planning of journeys to allow more travelling time is also advised to avoid unexpected delay. \n\nMembers of the public are advised to watch out for the latest traffic news through the media. Details of the special traffic arrangement are now available on the TD&apos;s website (www.td.gov.hk).",
    expectedTags: ['tsing sha highway',
        'sha tin',
        'new territories',
        'shing mun tunnel',
        'tai wai',
        'kwai chung',
        'kwai tsing',
        'lion rock tunnel',
        'tai po road',
        'sham shui po',
        'tai po kau',
        'shek kip mei',
        'tai po',
        'kowloon'
    ]
}, {
    input: "A two-way toll collection arrangement at the Lantau Link (including entering and leaving Ma Wan) will be implemented from midnight on 20 August (Sunday). All traffic lanes at the toll plazas will be temporarily closed for about two minutes for setting up of the new toll collection system.    \n\nMotorists should reduce speed, follow the traffic signs on site and drive with care when approaching the Lantau Link Main Toll Plaza (airport bound). Vehicles which are not installed with Autotoll devices should stop at the new manual toll collection lanes to pay toll.",
    expectedTags: ['lantau link', 'ma wan', 'tsuen wan', 'new territories']
}, {
    input: "Traffic at Tuen Mun Road Tsuen Wan bound has resumed normal.",
    expectedTags: ['tuen mun road', 'tsuen wan', 'new territories']
}, { /*todo remove mtr tag*/
    input: "Part of the lanes of Tsuen Wan Road Kowloon bound near Tsuen Wan West MTR Station which was closed due to vehicle breakdown is re-opened to all traffic.",
    expectedTags: ['tsuen wan road', 'tsuen wan', 'new territories', 'mtr', 'kowloon']
}, {
    input: "Due to heavy traffic, Lantau Link Airport bound is very congested.\nMembers of the public are advised to use public transport (including non road based public transport) to Lantau Island and the Airport. Early planning of journeys to allow more travelling time is also advised to avoid unexpected delay.",
    expectedTags: ['lantau link',
        'ma wan',
        'tsuen wan',
        'new territories',
        'lantau island',
        'islands'
    ]
}, {
    input: "Traffic at Tai Lam Tunnel Kowloon bound has resumed normal.  Intermittent closure at Tai Lam Tunnel (Kowloon bound) has been cancelled.",
    expectedTags: ['tai lam tunnel', 'tai lam', 'tuen mun', 'new territories', 'kowloon']
}, {
    input: "The Transport Department has received notification from “New World First Ferry Services Limited” that due to typhoon HATO, Inter-islands ferry services will be departing earlier. The last sailing of Inter-islands ferry services is departing from Mui Wo to Cheung Chau and the departure is at 10:20 pm.\n\nThe last departures of the following routes are as follows:  \n(a) Cheung Chau to Chi Ma Wan: Last sailing departs according to the sailing schedule;  \n(b) Cheung Chau to Mui Wo: 09:00 pm;  \n(c) Chi Ma Wan to Mui Wo: Last sailing departs according to the sailing schedule;\n(d) Mui Wo to Peng Chau: 09:30 pm;  \n(e) Peng Chau to Mui Wo: 09:50 pm;  \n(f) Mui Wo to Chi Ma Wan: Last sailing departs according to the sailing schedule;\n(g) Mui Wo to Cheung Chau: 10:20 pm; and  	\n(h) Chi Ma Wan to Cheung Chau: Last sailing departs according to the sailing schedule.",
    expectedTags: ['cheung chau',
        'islands',
        'chi ma wan',
        'peng chau',
        'mui wo',
        'new territories'
    ]
}, {
    input: "Transport Department has received notification from Fortune Ferry Co. Ltd that due to typhoon the ferry service between Tuen Mun, Tung Chung, Sha Lo Wan and Tai  O is suspended until further notice.\n\nThe following departure is expected to be affected:  \n(i) Tung Chung to Tuen Mun: 07:30 pm.",
    expectedTags: ['tuen mun', 'new territories', 'tung chung', 'islands', 'tai o']
}, {
    input: "Due to hoisting of Strong Wind Signal No. 3 and the associated wet weather, Transport Department appeals motorists and the commuters to:  \ni. pay attention to the special traffic and transport arrangements may be implemented;  \nii. pay attention to the possible traffic congestions of the roads;  \niii. plan the journey in advance;  \niv. allow more traveling time to cater for delay;  \nv. drive with extra care and patience; and  \nvi. take heed of traffic situation particularly at busy junctions with obstructive views.",
    expectedTags: []
}, {
    input: "Due to fallen tree, all lanes of Fan Kam Road both bounds near Pat Heung Police Station are closed to all traffic.\n\nTraffic is busy now.",
    expectedTags: ['fan kam road',
        'fanling',
        'sheung shui',
        'yuen long',
        'north',
        'new territories',
        'pat heung'
    ]
}, {
    input: "Due to fallen trees, dangerous scaffoldings, fallen scaffoldings or landslide, the following road sections are closed to all traffic:\n1.	all lanes of Pun Shan Street southbound between Chai Wan Kok Street and Sha Tsui Road;\n2.	part of the lanes of Lung Cheung Road Tsuen Wan bound near Chak On Estate;\n3.	the middle and slow lanes of San Tin Highway Yuen Long bound near Fairview Park;\n4.	the lane no. 3 and 4 of Prince Edward Road East Mong Kok bound near King Tai Street;\n5.	all lanes of Marsh Road at-grade and flyover (both bounds) between Lockhart Road and Gloucester Road;\n6.	all lanes of Gloucester Road Service Road (westbound) between Canal Road West and Marsh Road;\n7.	the lane no. 1 of Kwun Tong Road Yau Tong bound near Kai Tak Mansion;\n8.	all lanes of Peak Road both bounds near Peak Road House No. 28;\n9.	part of the lane of Lung Cheung Road Tai Hom Road bound near Po Kong Village Road; \n10.	the slow lane of Island Eastern Corridor Chai Wan bound near Tai Koo Shing;\n11.	all lanes of Caroline Hill Road both bounds between Link Road and Stadium Path;\n12.	part of the lanes of Lok Ma Chau Road near Ha Wan Tsuen;\n13.	part of the lanes of South Lantau Road near Shui Hau;\n14.	part of the lanes of Tai O Road between Tai O and Sham Wat Road;\n15.	the only lane of Choi Ha Road eastbound between Jordan Valley North Road and Chun Wah Road;\n16.	part of the lanes of Stubbs Road;\n17.	part of the lanes of Repulse Bay Road;\n18.	part of the lanes of Island Road;\n19.	part of the lanes of Stanley Gap Road;\n20.	part of the lanes of Tai Tam Road;\n21.	part of the lanes of Shek O Road;\n22.	part of the lanes of Robinson Road;\n23.	part of the lanes of Macdonnell Road; and\n24.	part of the lanes of Nam Fung Road.",
    expectedTags: ['jordan valley north road',
        'ngau tau kok',
        'kwun tong',
        'kowloon',
        'island eastern corridor',
        'sai wan ho',
        'eastern',
        'hong kong island',
        'prince edward road east',
        'san po kong',
        'mong kok',
        'wong tai sin',
        'yau tsim mong',
        'po kong village road',
        'diamond hill',
        'tsz wan shan',
        'chai wan kok street',
        'tsuen wan',
        'new territories',
        'caroline hill road',
        'causeway bay',
        'wan chai',
        'south lantau road',
        'cheung sha',
        'lantau island',
        'mui wo',
        'islands',
        'stanley gap road',
        'stanley',
        'southern',
        'repulse bay road',
        'repulse bay',
        'lok ma chau road',
        'yuen long',
        'lung cheung road',
        'kowloon tong',
        'kowloon city',
        'king tai street',
        'san tin highway',
        'tam mei',
        'san tin',
        'north',
        'gloucester road',
        'pun shan street',
        'macdonnell road',
        'mid-levels',
        'central and western',
        'canal road west',
        'kwun tong road',
        'kowloon bay',
        'ngau chi wan',
        'lockhart road',
        'nam fung road',
        'wong chuk hang',
        'deep water bay',
        'sha tsui road',
        'sham wat road',
        'ngong ping',
        'chun wah road',
        'robinson road',
        'tai tam road',
        'tai tam',
        'chai wan',
        'tai hom road',
        'stadium path',
        'choi ha road',
        'shek o road',
        'shek o',
        'stubbs road',
        'island road',
        'tai o road',
        'tai o',
        'marsh road',
        'link road',
        'happy valley',
        'peak road',
        'the peak',
        'yau tong'
    ]
}, {
    input: "Due to damage of Hei Ling Chau Pier, the ferry service between Ping Chau and Hei Ling Chau will be suspended before 12. 30 p. m. on 24 August 2017.    Members of the public are advised to pay attention to the latest traffic news for the above ferry service after 12. 30 p. m. on 24 August 2017.",
    expectedTags: ['hei ling chau', 'islands']
}, {
    input: "Due to the typhoon HATO, the following public transport services in Hong Kong have been affected: \n \nA) Bus Services: \n \n1. NWFB/CTB: Most NWFB &amp; Citybus daytime routes have gradually resumed limited service, except the following routes: \ni) NWFB: 9, 13, 14, 15, 18, 42C, 63, 66, 82M, 101X, 106P, 601P, 641, 680X, 682A, 682B, 682C, 796P, 798A, 798B, 971, 980X, H1; \nii) CTB: 1P, 6, 6A, 6X, 12A, 12M, 37B(Special trip from Exchange Square), 40, 41A, 43M, 70A, 73, 76 102P, 107P, 118P, 182X, 260, 307P, 681P, 930A, 962, 962B(Special trip from Hennessy Road), 962C, 967X, 969A, 969B, 969C, 973, 981P, X962, E21C, E22C, E22P, E22X, R8, \n \n2. KMB and LWB: most of the daytime routes have gradually resumed service, except the following routes: \n5A, 5P, 5X, 6P, 13S, 15X, 40P, 41P, 43C, 43P, 46P, 48P, 51, 53, 54, 58P, 59A, 69C, 74B, 76K, 77K, 78K, 82P, 83S, 87S, 91P, 94, 98P, 99, 98S, 101X, 106P, 107P, 182X, 224X, 234C, 251B, 258P, 258X, 259X, 260C, 267X, 269P, 960A, 270B, 274P, 274X, 271B, 271X, 276, 277P, 286C, 290B, 290X, 299X, 307P, 373, 601P, 603P, 619X, 621, 641, 678, 680X, 681P, 934, 934A, 935, 936, 960B, 968X 980X, 981P, T277, B1, E32A, E34P, S64C, S64P, R8, R33, R42 \n \n3. NLB: \n(a) Routes 4, 34, 36, 37, 37H, 37M, 38, A35, B2 and B2P have resumed normal; \n(b) Route 3M has gradually resumed normal since 05:50 pm; \n(c) Routes 2, 21, 23 are still suspended; \n(d) Route 11 is truncated to operate as a circular route between Tung Chung and Tong Fuk; \n(e) Route 1 is truncated to operate as a circular route between Mui Wo and Tong Fuk. \n \nB) MTR: \nMTR Operations has resumed normal. \n \nC) Ferry Services: \nI) Inner Harbour Ferry Services: \n \nA) The following routes have gradually resumed service: \n1. Coral Sea: Kwun Tong- Sai Wan Ho \n2. Coral Sea: Sai Wan Ho – Sam Ka Tsuen \n3. Star Ferry: Central- Tsim Sha Tsui and Wan Chai – Tsim Sha Tsui \n \nB) The following routes are still suspended: \n \nDue to damage or obstruction of some ferry piers, the following three ferry services are still suspended for a longer period after typhoon has been lowered to No. 1, the three ferry services including: \n1. North Point – Hung Hom \n2. North Point – Kowloon City \n3. North Point – Kwun Tong (via Kai Tak) \n \nPassengers please use road and rail based transport, and pay attention to announcements of Government and ferry operators, relevant government departments is following up the matter so that the service could be resumed as soon as possible. \n \nII) Outlying Islands Ferry Services: \n \nA) The following routes have gradually resumed service: \n1. New World First Ferry: Central - Cheung Chau \n2. New World First Ferry: Central – Mui Wo \n3. Hong Kong and Kowloon Ferry: Central - Sok Kwu Wan \n4. Hong Kong and Kowloon Ferry: Central – Yung Shue Wan \n5. Hong Kong and Kowloon Ferry: Central – Peng Chau \n6. Tsui Wah: Aberdeen – Cheung Chau \n7. Tsui Wah: Aberdeen –Yung Shue Wan \n8. Chuen Kee Ferry: Aberdeen - Sok Kwu Wan \n9. Discovery Bay Ferry: Discovery Bay – Central \n10. Park Island Ferry: Park Island- Central \n \nB) The following routes are still suspended: \n \nDue to damage or obstruction of some ferry piers, the following two ferry services are still suspended for a longer period, the two ferry services including: \n1. New World First Ferry: Inter- Islands \n2. Fortune Ferry: Tuen Mun – Tung Chung – Sha Lo Wan – Tai O \n \nMembers of the public are advised to pay attention to announcements of Government and ferry operators, relevant government departments is following up the matter so that the service could be resumed as soon as possible. \n \nWaterborne public transport services may still be affected by weather and sea conditions. Members of the public are advised to pay attention to radio / TV announcements on the latest traffic and public transport news updates.",
    expectedTags: ['hennessy road',
        'wan chai',
        'causeway bay',
        'hong kong island',
        'kowloon city',
        'kowloon',
        'kwun tong',
        'tuen mun',
        'new territories',
        'aberdeen',
        'southern',
        'central',
        'central and western',
        'discovery bay',
        'islands',
        'hung hom',
        'tsim sha tsui',
        'yau tsim mong',
        'north point',
        'eastern',
        'tung chung',
        'cheung chau',
        'peng chau',
        'mui wo',
        'sai wan ho',
        'tai o',
        'tong fuk',
        'mtr'
    ]
}, {
    input: "I) Inner Harbour Ferry Services: \n \nA) The following routes have gradually resumed service: \n1. Coral Sea: Kwun Tong- Sai Wan Ho \n2. Coral Sea: Sai Wan Ho – Sam Ka Tsuen \n3. Star Ferry: Central- Tsim Sha Tsui and Wan Chai – Tsim Sha Tsui \n \nB) The following routes are still suspended: \n \nDue to damage or obstruction of some ferry piers, the following three ferry services are still suspended for a longer period after typhoon has been lowered to No. 1, the three ferry services including: \n1. North Point – Hung Hom \n2. North Point – Kowloon City \n3. North Point – Kwun Tong (via Kai Tak) \n \nPassengers please use road and rail based transport, and pay attention to announcements of Government and ferry operators, relevant government departments is following up the matter so that the service could be resumed as soon as possible. \n \nII) Outlying Islands Ferry Services: \n \nA) The following routes have gradually resumed service: \n1. New World First Ferry: Central - Cheung Chau \n2. New World First Ferry: Central – Mui Wo \n3. Hong Kong and Kowloon Ferry: Central - Sok Kwu Wan \n4. Hong Kong and Kowloon Ferry: Central – Yung Shue Wan \n5. Hong Kong and Kowloon Ferry: Central – Peng Chau \n6. Tsui Wah: Aberdeen – Cheung Chau \n7. Tsui Wah: Aberdeen –Yung Shue Wan \n8. Chuen Kee Ferry: Aberdeen - Sok Kwu Wan \n9. Discovery Bay Ferry: Discovery Bay – Central \n10. Park Island Ferry: Park Island- Central \n \nB) The following routes are still suspended: \n \nDue to damage or obstruction of some ferry piers, the following two ferry services are still suspended for a longer period, the two ferry services including: \n1. New World First Ferry: Inter- Islands \n2. Fortune Ferry: Tuen Mun – Tung Chung – Sha Lo Wan – Tai O \n \nMembers of the public are advised to pay attention to announcements of Government and ferry operators, relevant government departments is following up the matter so that the service could be resumed as soon as possible. \n \nWaterborne public transport services may still be affected by weather and sea conditions. Members of the public are advised to pay attention to radio / TV \nannouncements on the latest traffic and public transport news updates.",
    expectedTags: ['wan chai',
        'hong kong island',
        'kowloon city',
        'kowloon',
        'kwun tong',
        'tuen mun',
        'new territories',
        'aberdeen',
        'southern',
        'central',
        'central and western',
        'discovery bay',
        'islands',
        'hung hom',
        'tsim sha tsui',
        'yau tsim mong',
        'north point',
        'eastern',
        'tung chung',
        'cheung chau',
        'peng chau',
        'mui wo',
        'sai wan ho',
        'tai o'
    ]
}, {
    input: "Due to dangerous scaffolding, the following road sections are closed:    \n\ni) the lane no. 1 and the lane no. 2 of Gloucester Road (Central bound) near O&apos;Brien Road; and  \nii) all lanes of Gloucester Service Road (westbound) near O&apos;Briend Road.\n\nOnly remaining lanes are still available to motorists.\n\nMembers of the public may consider using non-road based public transport.\n\nTraffic is congested now.\n",
    expectedTags: ['gloucester road',
        'wan chai',
        'causeway bay',
        'hong kong island',
        'o\'brien road',
        'central',
        'central and western'
    ]
}, {
    input: "Due to fallen tree, the slow lane of Lung Cheung Road Kwai Chung bound near Chak On Estate is closed to all traffic.\n\nOnly the fast lane is still available to motorists.\n\nTraffic is congested now.",
    expectedTags: ['lung cheung road',
        'wong tai sin',
        'kowloon tong',
        'kowloon city',
        'kowloon',
        'kwai chung',
        'kwai tsing',
        'new territories'
    ]
}, {
    input: "The Transport Department has received notifications from public transport operators that:    A) Bus Services:    1. NWFB/CTB: Except CTB Route No. 76; NWFB Route Nos. 9, 14, 15 and 66, other NWFB and CTB daytime services have gradually resumed normal.    2. KMB and LWB: Except KMB Route Nos. 76K, 91S, 251M and 251B, all daytimes services have resumed normal.    3. NLB: All daytime services have resumed normal.    B) MTR: All daytime services have resumed normal.    C) Ferry Services:    Except Hei Ling Chau Pier, the emergency repairing works of other ferry piers which were damaged before are generally completed.    Except that the ferry service plying between Ping Chau and Hei Ling Chau is still suspended, all ferry service has resumed normal.    (Waterborne public transport services may still be affected by weather and sea conditions. Members of the public are advised to pay attention to radio / TV announcements on the latest traffic and public transport)    D) Tram Services: All daytime services have resumed normal.",
    expectedTags: ['hei ling chau', 'islands', 'mtr']
}, {
    input: "There might be heavier traffic on the Lantau Link (Airport bound) in the morning due to the previous tropical cyclone. The Transport Department is now closely monitoring the traffic situation at Lantau Link. Traffic at the Lantau Link on both bounds is normal.",
    expectedTags: ['lantau link', 'ma wan', 'tsuen wan', 'new territories']
}, {
    input: "Due to damage of Hei Ling Chau Pier, the ferry service between Ping Chau and Hei Ling Chau will be suspended before 12. 30 p. m. on 24 August 2017.    Members of the public are advised to pay attention to the latest traffic news for the above ferry service after 12. 30 p. m. on 24 August 2017.",
    expectedTags: ['hei ling chau', 'islands']
}, {
    input: "Public Transport Services in the Peak, the Mid-levels and Stubbs Road Due to fallen trees, dangerous scaffoldings, fallen scaffoldings or landslide after typhoon on Shek O Road, Tai Tam Road, Peak Road, Stubbs Road and Robinson Road, the following public transport services have been temporarily diverted / suspended: Suspension of Services NWFB Route No. 9 (Shau Kei Wan – Shek O) and NWFB Route No. 15 (Central – the Peak) Temporary Diversions The following routes will not operate via Stubbs Road and divert via Wong Nai Chung Road and Blue Pool Road: CTB Route No. 6 The following routes will not operate via Stanley Fort or Stanley Prison: CTB Route Nos. 6, 6A, 6X, 73, 260, 973 NWFB Route No. 14 The following routes will not operate via Robinson Road and divert via Seymour Road: CTB Route Nos. 12M and 40 NWFB Route No. 23 The following route will not operate via Robinson Road and Castle Road and divert via Bonham Road and Caine Road: NWFB Route No. 13 Notices will be displayed by the bus company to advise passengers of the temporary arrangements. Passengers should take notice of passenger information at bus stops and should watch out for the latest traffic news through the media.",
    expectedTags: ['wong nai chung road',
        'happy valley',
        'wan chai',
        'hong kong island',
        'blue pool road',
        'robinson road',
        'mid-levels',
        'central and western',
        'tai tam road',
        'tai tam',
        'chai wan',
        'southern',
        'eastern',
        'seymour road',
        'bonham road',
        'pok fu lam',
        'castle road',
        'shek o road',
        'shek o',
        'stubbs road',
        'caine road',
        'central',
        'peak road',
        'the peak',
        'shau kei wan',
        'stanley'
    ]
}, {
    input: "The Transport Department has received notification from Hongkong Tramways Ltd. that Happy Valley Loop tram service has resumed normal.",
    expectedTags: ['happy valley', 'wan chai', 'hong kong island']
}, {
    input: "Public Transport Services in Shek O and Stanley\n\nDue to fallen trees after typhoon on Shek O Road and Stanley Tung Tau Wan Road, the following public transport services have been temporarily diverted / suspended:\n\nSuspension of Services\nNWFB Route No. 9 (Shau Kei Wan – Shek O)\n\nTemporary Diversions\nThe following routes will not operate via Stanley Fort or Stanley Prison:\nCTB Route Nos. 6, 6A, 6X, 73, 260, 973\nNWFB Route No. 14\n\nNotices have been displayed by the bus company to advise passengers of the temporary arrangements. Passengers should take notice of passenger information at bus stops and should watch out for the latest traffic news through the media.",
    expectedTags: ['tung tau wan road',
        'stanley',
        'southern',
        'hong kong island',
        'shek o road',
        'shek o',
        'shau kei wan',
        'eastern'
    ]
}, {
    input: "Due to heavy traffic, the following road sections are congested:  \n(i) Hennessy Road (eastbound);  \n(ii) Connaught Road Central (eastbound);  \n(iii) Garden Road;  \n(iv) Cotton Tree Drive;  \n(v) Gloucester Road (both bounds); and  \n(vi) Queensway.      \n\nMotorists passing through the above section of road are advised to drive with utmost care and patience, and consider using alternative routes.",
    expectedTags: ['connaught road central',
        'central',
        'sheung wan',
        'central and western',
        'hong kong island',
        'cotton tree drive',
        'admiralty',
        'gloucester road',
        'wan chai',
        'causeway bay',
        'hennessy road',
        'garden road',
        'mid-levels',
        'queensway'
    ]
}, {
    input: "Due to improved weather condition, the following special traffic and transport arrangements have been implemented on Shenzhen Bay Bridge, details as shown below:\n\n(A) Traffic Arrangement\nThe Shenzhen Bay Bridge has been re-opened at 01:15 pm with speed limit of 50km/h.\n\n(B) Public Transport Arrangement\nFranchised bus service route B3 is already in normal operation.\nFranchised bus service special departure B3A is already in normal operation.\nFranchised bus service special departure B3M is already in normal operation.\nFranchised bus service special departure B3X is already in normal operation.\nGreen Minibus Route 618 is already in normal operation.\n\n(C) Transport Department Advice \nDrivers are requested to drive with care and pay attention to the direction of the Police.\nMembers of the public are advised to pay attention to radio / TV announcements for the latest traffic condition.",
    expectedTags: ['shenzhen bay bridge',
        'lau fau shan',
        'yuen long',
        'new territories'
    ]
}, {
    input: "Due to fallen trees, dangerous scaffoldings, fallen scaffoldings or flooding, part or all of the traffic lanes of the following road sections are closed to all traffic:    Hong Kong Island  1. lanes of Stubbs Road both bounds near AIA Building;  2. part of the lanes of Tai O Road both bound near Lung Chai;  3. part of the lanes Repulse Bay Road near Repluse Bay Mansion;  4. all lanes of Carmel Road in Staney;  5. part of the lanes of Cape Road both bounds near Chung Hom Kok Road;  6. part of the lanes of Cloud View Road near Yee King Road both bound near Cheung Chuk Shan College;  7. part of the lanes of Tai Tam Road both bounds (Tai Tam Dam Section); and  8. all lanes of Lei Tung Estate Road both bounds near Hong Kong True Light College.    Kowloon:  1. the slip road of Tate&apos;s Cairn Tunnel Lung Cheung Road east bound near Hollywood Plaza;  2. all lanes of Reclamation Street Prince Edward bound between Mong Kok Road and Argyle Street;  3. all lanes of Tai Hom Road both bound near Lung Poon Street;  4. all lanes of Nga Tsin Wai Road both bound between Junction Road and Lion Rock Road; and  5. part of the lane of Chun Wah Road both bound near Ngau Tau Kok Road.",
    expectedTags: ['lei tung estate road',
        'ap lei chau',
        'southern',
        'hong kong island',
        'tate\'s cairn tunnel',
        'tsz wan shan',
        'wong tai sin',
        'kowloon',
        'reclamation street',
        'yau ma tei',
        'mong kok',
        'sham shui po',
        'yau tsim mong',
        'chung hom kok road',
        'stanley',
        'chung hom kok',
        'nga tsin wai road',
        'kowloon city',
        'ngau tau kok road',
        'ngau tau kok',
        'kwun tong',
        'repulse bay road',
        'repulse bay',
        'lung cheung road',
        'kowloon tong',
        'lung poon street',
        'diamond hill',
        'cloud view road',
        'north point',
        'eastern',
        'lion rock road',
        'mong kok road',
        'argyle street',
        'ho man tin',
        'junction road',
        'wang tau hom',
        'chun wah road',
        'yee king road',
        'causeway bay',
        'wan chai',
        'tai tam road',
        'tai tam',
        'chai wan',
        'tai hom road',
        'carmel road',
        'stubbs road',
        'mid-levels',
        'central and western',
        'tai o road',
        'tai o',
        'islands',
        'cape road'
    ]
}, {
    input: "Public Transport Services in Shek O and Stanley    Due to fallen trees on Tung Tau Wan Road and Stanley Village Road, the following routes will be diverted as follows:  1. NWFB Route No. 14 (special departure)(both bounds): not operate via Stanley Prison  2. CTB Route Nos. 6, 6X, 73 and 260:  Stanley bound: not operate via Stanley Prison and the section of Stanley Gap Road between Chung Hom Kok Road and Stanley Village Road;  Central bound: not operate via Stanley Prison    The following bus stops of CTB Route Nos. 6, 6X, 73 and 260 are temporarily suspended:  1. Stanley bound: Chung Hom Kok Road, Wilson Trail, Stanley Gap Road, Stanley Mound Pumping Station, Stanley Gap Road Interchange, St. Stephen&apos;s College and Stanley Prison  2. Central bound: Stanley Prison and St. Stephen&apos;s College.    Affected passengers heading to Stanley Prison are advised to take GMB Route Nos. 40/40X (Causeway Bay (Jardine&apos;s Bazaar) - Stanley Village/Stanley Prison) or GMB Route No. 52 (Aberdeen - Stanley Prison)    Notices have been displayed by the bus company to advise passengers of the temporary arrangements. Passengers should take notice of passenger information at bus stops and watch out for the latest traffic news through the media.",
    expectedTags: ['stanley village road',
        'stanley',
        'southern',
        'hong kong island',
        'chung hom kok road',
        'chung hom kok',
        'tung tau wan road',
        'jardine\'s bazaar',
        'causeway bay',
        'wan chai',
        'stanley gap road',
        'aberdeen',
        'central',
        'central and western',
        'shek o'
    ]
}, {
    input: "Due to fallen tree at Castle Peak Road- Tam Mi and San Tam Road, KMB Route No. 76K has been diverted.",
    expectedTags: ['castle peak road',
        'sham shui po',
        'cheung sha wan',
        'kowloon',
        'san tam road',
        'tam mei',
        'yuen long',
        'new territories',
        'tam mi'
    ]
}, {
    input: "Due to fallen trees, dangerous scaffoldings, fallen scaffoldings or flooding, the following road sections are closed to all traffic:    \n\nHong Kong Island  1. all lanes of Carmel Road in Stanley; and  2. part of the lanes of Tai Tam Road both bounds (Tai Tam Dam Section).    \n\nKowloon:  1. part of the lane of Chun Wah Road both bound near Ngau Tau Kok Road.\n\n******************** \nTransport Department has launched the &quot;eTraffic News&quot; mobile application for disseminating the latest traffic news. For major incidents, messages will also be sent through &quot;GovHK Notifications&quot;. Please download it from Google Play or App Store.",
    expectedTags: ['ngau tau kok road',
        'ngau tau kok',
        'kwun tong',
        'kowloon',
        'chun wah road',
        'tai tam road',
        'tai tam',
        'chai wan',
        'southern',
        'eastern',
        'hong kong island',
        'carmel road',
        'stanley'
    ]
}, {
    input: "The Transport Department has received notification from “Fortune Ferry Company Ltd. ” that the ferry service between Tuen Mun, Tung Chung, Sha Lo Wan and Tai O is still suspended until further notice.",
    expectedTags: ['tuen mun', 'new territories', 'tung chung', 'islands', 'tai o']
}, {
    input: "Due to fallen tree, all lanes of Tai Hang Tung Road both bounds near Concordia Lutheran School are closed to all traffic.",
    expectedTags: ['tai hang tung road',
        'shek kip mei',
        'yau yat chuen',
        'sham shui po',
        'kowloon city',
        'kowloon'
    ]
}, {
    input: "As at 6:30 pm, the following franchise bus routes are still suspended until further notice: 1. NWFB and CTB: Due to fallen tree during typhoon, part of the traffic lanes of Shek O Road, Tai Tam Road, Stanley Gap Road, Repulse Bay Road, Island Road, Mount Davis Road and Chi Fu Road have been affected, the following public transport services have been affected: A. NWFB: Route Nos. 3A, 9, 14, 63, 66; B. CTB: Route Nos. 6, 6A, 6X, 73, 260; and Affected passengers may consider using temporary bus Route No. 73A plying between Wong Chuk Hang MTR Station and Stanley or Hong Kong Island GMB Route Nos. 40/40X (Causeway Bay – Stanley), 52 (Aberdeen – Stanley) or 16/16M/16X (Chai Wan – Chung Hom Kok/Stanley) for access to/from Stanley. 2. KMB: Due to fallen tree during typhoon, part of the traffic lanes of Sha Tau Kok Road, Kwu Tung Road, San Tam Road, Castle Peak Road - Tam Mi and San Tin have been affected, the following public transport services have been affected: Nos. 76K, 77K, 78K. 3. Members of the public are advised to plan their journey early, allow more traveling time to cater for unexpected delay and use other public transport services, and watch out for the latest traffic news through media. ",
    expectedTags: ['castle peak road',
        'sham shui po',
        'cheung sha wan',
        'kowloon',
        'stanley gap road',
        'stanley',
        'southern',
        'hong kong island',
        'repulse bay road',
        'repulse bay',
        'mount davis road',
        'pok fu lam',
        'kwu tung road',
        'san tin',
        'kwu tung',
        'north',
        'new territories',
        'tai tam road',
        'tai tam',
        'chai wan',
        'eastern',
        'san tam road',
        'tam mei',
        'yuen long',
        'shek o road',
        'shek o',
        'chi fu road',
        'island road',
        'deep water bay',
        'aberdeen',
        'hung hom',
        'kowloon city',
        'causeway bay',
        'wan chai',
        'tam mi',
        'sha tau kok',
        'wong chuk hang',
        'mtr'
    ]
}, {
    input: "Due to heavy traffic, Tai Po Road - Sha Tin Kowloon bound is busy. Motorists passing through the above section of road are advised to drive with utmost care and patience, and consider using alternative routes. ",
    expectedTags: ['tai po road - sha tin', 'sha tin', 'new territories', 'kowloon']
}, {
    input: "",
    expectedTags: []
}];

module.exports = testRecords;