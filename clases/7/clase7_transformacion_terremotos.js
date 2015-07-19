/*
EJERCICIO clase7:
por cada elemento del arrayGigante
le aplico el split y obtengo un array con los renglones del array gigante
tomo el elemento de la segunda posicion de cada uno de esos renglones que es el país
voy generando una instancia de objRepeticiones por cada pais, donde guardo la cant de veces que repite ese pais
termino de recorrer el arrayGigante
recorro todas las instancias del objRepeticiones y por cada una armo otro objeto que tenga como keys
name y value y lo voy volcando a un array que será el array de objetos, y es el array de salida

["x, egipto, x,x,x,x,x,",
"x, budapest, x,x,x,x,x,"
"x, hong kong, x,x,x,x,x,",
"x, hong kong, x,x,x,x,x,"]
```
->
```{ 
  "egipto": 1,
  "budapest": 1,
  "hong kong": 2
}```
->
```[
  { name:"egipto", value:1},
  { name: "budapest", value: 1},
  { name: "hong kong", value: 2}
]
*/

var arrTerremotos = [ '2015-05-04T18:04:54.320Z, South Georgia and the South Sandwich Islands,5.4,mb,,54,5.654,1.03,us,us20002b8y,2015-05-04T18:23:43.605Z,"21km NNW of Visokoi Island, South Georgia and the South Sandwich Islands",earthquake',
  '2015-05-04T16:19:30.989Z, Nevada,3.18,ml,5,85.4,0.736,0.1914,nn,nn00492670,2015-05-04T17:02:50.040Z,"42km NNW of Currant, Nevada",earthquake',
  '2015-05-04T14:50:24.490Z, Oklahoma,3,mb_lg,,61,0.492,0.29,us,us20002b70,2015-05-04T15:40:47.237Z,"22km W of Perry, Oklahoma",earthquake',
  '2015-05-04T14:42:35.350Z, Hawaii,3.58,ml,29,78,0.0114,0.07,hv,hv60916001,2015-05-04T18:32:59.294Z,"5km S of Volcano, Hawaii",earthquake',
  '2015-05-04T14:42:10.700Z, Hawaii,3.6,ml,,96,0.02,0.2,us,us20002b77,2015-05-04T16:44:40.418Z,"4km SSW of Volcano, Hawaii",earthquake',
  '2015-05-04T12:24:10.370Z,Balleny Islands region,5.4,mb,,100,7.271,0.47,us,us20002b6b,2015-05-04T17:58:40.000Z,"Balleny Islands region",earthquake',
  '2015-05-04T11:56:42.373Z, Nevada,3.67,ml,19,75.39,0.742,0.2143,nn,nn00492632,2015-05-04T12:43:17.622Z,"42km NNW of Currant, Nevada",earthquake',
  '2015-05-04T11:30:38.620Z, Iran,4.9,mb,,85,4.658,0.57,us,us20002b5q,2015-05-04T11:49:33.310Z,"103km SSE of Iranshahr, Iran",earthquake',
  '2015-05-04T11:02:34.430Z,North of Ascension Island,4.7,mb,,120,11.324,0.54,us,us20002b5l,2015-05-04T11:56:13.054Z,"North of Ascension Island",earthquake',
  '2015-05-04T08:20:37.350Z, Guatemala,4.7,mb,,148,0.959,1.08,us,us20002b4s,2015-05-04T13:21:13.445Z,"10km SE of Cuilco, Guatemala",earthquake',
  '2015-05-04T08:09:14.810Z, Papua New Guinea,5.1,mb,,90,1.422,0.99,us,us20002b4m,2015-05-04T16:11:46.731Z,"143km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-04T06:55:43.310Z, Indonesia,5.1,mb,,90,1.326,1.09,us,us20002b44,2015-05-04T14:58:13.664Z,"138km ENE of Bitung, Indonesia",earthquake',
  '2015-05-04T04:26:06.470Z, Tonga,4.5,mb,,68,3.552,0.71,us,us20002b3m,2015-05-04T12:28:35.916Z,"114km W of Hihifo, Tonga",earthquake',
  '2015-05-04T04:07:36.440Z, Greece,4.7,mb,,57,0.877,0.81,us,us20002b3h,2015-05-04T12:11:39.421Z,"64km S of Pirgos, Greece",earthquake',
  '2015-05-04T04:06:12.500Z, Puerto Rico,3,Md,9,316.8,0.90729844,0.28,pr,pr15124001,2015-05-04T12:08:54.332Z,"55km NW of Rincon, Puerto Rico",earthquake',
  '2015-05-04T02:29:11.030Z, New Zealand,5.6,mb,,47,0.319,0.74,us,us20002b38,2015-05-04T15:09:20.040Z,"30km NW of Wanaka, New Zealand",earthquake',
  '2015-05-04T01:30:06.740Z, Oklahoma,3.4,mb_lg,,92,0.258,0.19,us,us20002b32,2015-05-04T02:14:15.661Z,"19km SW of Medford, Oklahoma",earthquake',
  '2015-05-04T01:16:17.240Z, Japan,4.5,mb,,104,0.679,0.83,us,us20002b34,2015-05-04T09:20:11.944Z,"74km SW of Yonakuni, Japan",earthquake',
  '2015-05-04T01:15:07.150Z, Nepal,4.4,mb,,93,0.794,0.71,us,us20002b2y,2015-05-04T17:07:53.144Z,"34km NNW of Ramechhap, Nepal",earthquake',
  '2015-05-04T01:04:48.880Z, Papua New Guinea,4.6,mb,,95,1.065,1.13,us,us20002b2x,2015-05-04T09:09:43.448Z,"102km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-04T00:40:58.140Z, Peru,4.2,mb,,136,3.117,0.92,us,us20002b2u,2015-05-04T08:43:30.679Z,"50km W of Lluta, Peru",earthquake',
  '2015-05-03T23:40:56.120Z, Papua New Guinea,5.2,mb,,54,1.325,1.01,us,us20002b2k,2015-05-04T15:30:48.040Z,"132km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T23:14:15.220Z, Nepal,4.1,mb,,153,0.849,1.15,us,us20002b2a,2015-05-04T07:16:44.793Z,"26km SSW of Kodari, Nepal",earthquake',
  '2015-05-03T22:50:47.550Z, Papua New Guinea,5.1,mb,,89,1.334,0.81,us,us20002b21,2015-05-04T06:54:11.541Z,"133km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T22:38:05.800Z, British Virgin Islands,3.1,Md,3,284.4,0.51563297,0.15,pr,pr15123006,2015-05-04T06:40:31.432Z,"82km N of Road Town, British Virgin Islands",earthquake',
  '2015-05-03T22:35:11.840Z, Papua New Guinea,5.5,mb,,50,1.408,0.76,us,us20002b1x,2015-05-04T06:37:39.181Z,"142km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T22:32:42.130Z, Papua New Guinea,5.6,mb,,25,1.414,1.33,us,us20002b1r,2015-05-04T18:41:33.000Z,"144km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T22:13:19.400Z, California,3.64,mw,82,47,0.05994,0.13,nc,nc72439615,2015-05-04T18:39:50.713Z,"1km S of Concord, California",earthquake',
  '2015-05-03T20:43:38.430Z, Pakistan,4.3,mb,,223,6.026,1.27,us,us20002b12,2015-05-04T04:46:29.391Z,"52km E of Gwadar, Pakistan",earthquake',
  '2015-05-03T20:21:56.360Z, Papua New Guinea,5.2,mb,,132,5.795,0.86,us,us20002b11,2015-05-04T04:24:52.110Z,"150km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T19:28:54.950Z, Papua New Guinea,4.8,mb,,83,1.472,0.91,us,us20002b0w,2015-05-04T03:36:55.751Z,"148km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T16:46:18.810Z, Greece,4.2,mb,,118,0.549,1.09,us,us20002b0c,2015-05-04T00:49:32.036Z,"59km SSW of Karpathos, Greece",earthquake',
  '2015-05-03T15:11:16.040Z, Texas,3.2,mb_lg,,58,0.02,0.51,us,us20002azv,2015-05-04T16:15:05.495Z,"4km N of Irving, Texas",earthquake',
  '2015-05-03T14:56:15.280Z, Nevada,3.45,ml,16,60.52,0.031,0.1794,nn,nn00492533,2015-05-04T14:06:10.040Z,"12km SW of Hawthorne, Nevada",earthquake',
  '2015-05-03T14:30:16.930Z, Japan,4.9,mb,,78,0.578,0.79,us,us20002azp,2015-05-04T09:14:56.634Z,"19km SW of Tomioka, Japan",earthquake',
  '2015-05-03T13:33:11.000Z, Chile,4,ml,,,,1.64,us,us20002azi,2015-05-03T21:35:44.351Z,"101km ENE of Vallenar, Chile",earthquake',
  '2015-05-03T13:09:07.430Z, Japan,4.6,mwr,,74,0.68,0.8,us,us20002azh,2015-05-04T12:55:14.590Z,"74km SW of Yonakuni, Japan",earthquake',
  '2015-05-03T12:35:12.000Z, Alaska,3.6,ml,,,,0.72,ak,ak11579012,2015-05-03T20:37:50.127Z,"45km WNW of Anchor Point, Alaska",earthquake',
  '2015-05-03T11:35:11.330Z, Nepal,4.3,mb,,168,1.671,0.77,us,us20002az8,2015-05-04T07:22:47.740Z,"33km NNW of Hitura, Nepal",earthquake',
  '2015-05-03T11:07:18.130Z, California,3.8,ml,158,24,0.008918,0.28,ci,ci37374008,2015-05-04T18:13:03.833Z,"1km WNW of View Park-Windsor Hills, California",earthquake',
  '2015-05-03T10:42:46.500Z, British Virgin Islands,3.2,Md,4,270,0.65127858,0.1,pr,pr15123002,2015-05-03T18:46:10.699Z,"81km NNW of Road Town, British Virgin Islands",earthquake',
  '2015-05-03T09:52:34.000Z, Alaska,3.2,ml,,,,0.7,ak,ak11578888,2015-05-03T17:57:08.948Z,"50km NNW of Talkeetna, Alaska",earthquake',
  '2015-05-03T07:24:28.380Z, Papua New Guinea,4.3,mb,,190,1.346,0.9,us,us20002ayh,2015-05-03T15:32:38.315Z,"137km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-03T07:09:58.610Z, Philippines,4.6,mb,,102,2.277,0.87,us,us20002ayg,2015-05-03T11:49:54.995Z,"33km N of Magsaysay, Philippines",earthquake',
  '2015-05-03T06:53:59.860Z, Japan,4.6,mb,,111,0.304,1.08,us,us20002ayd,2015-05-04T13:28:49.378Z,"3km SSE of Iwai, Japan",earthquake',
  '2015-05-03T05:43:14.690Z,Western Xizang,4.2,mb,,73,6.348,0.85,us,us20002ay7,2015-05-03T13:46:39.434Z,"Western Xizang",earthquake',
  '2015-05-03T04:17:40.040Z,Central Mid-Atlantic Ridge,5.1,mb,,39,15.368,0.86,us,us20002axw,2015-05-03T12:22:41.900Z,"Central Mid-Atlantic Ridge",earthquake',
  '2015-05-03T04:02:52.190Z, Japan,5,mb,,123,0.687,0.68,us,us20002axt,2015-05-03T05:14:38.081Z,"45km E of Namie, Japan",earthquake',
  '2015-05-03T03:31:57.500Z, U.S. Virgin Islands,3.2,Md,6,295.2,0.81836522,0.17,pr,pr15123001,2015-05-03T11:34:33.159Z,"59km E of Christiansted, U.S. Virgin Islands",earthquake',
  '2015-05-03T02:30:53.100Z, U.S. Virgin Islands,3.1,Md,9,234,0.87495909,0.31,pr,pr15123000,2015-05-03T10:33:24.177Z,"99km NNW of Charlotte Amalie, U.S. Virgin Islands",earthquake',
  '2015-05-03T02:30:41.660Z, New Zealand,4.8,mb,,72,0.633,0.86,us,us20002axh,2015-05-03T10:33:17.328Z,"13km S of Maketu, New Zealand",earthquake',
  '2015-05-03T01:08:35.030Z, Mississippi,3,mb_lg,,51,0.492,0.51,us,us20002ax8,2015-05-04T14:38:34.851Z,"8km SW of Canton, Mississippi",earthquake',
  '2015-05-03T00:39:23.520Z, Mississippi,3.2,mb_lg,,51,0.509,0.5,us,us20002ax0,2015-05-04T15:34:07.442Z,"6km SW of Canton, Mississippi",earthquake',
  '2015-05-03T00:35:23.280Z, Chile,4.2,mb,,86,0.422,0.66,us,us20002awx,2015-05-03T08:37:50.935Z,"41km ENE of Calama, Chile",earthquake',
  '2015-05-02T21:44:10.130Z, Nepal,4.2,mb,,93,0.831,0.9,us,us20002awm,2015-05-03T23:38:36.445Z,"29km S of Kodari, Nepal",earthquake',
  '2015-05-02T20:31:35.040Z, Philippines,4.4,mb,,111,3.093,0.87,us,us20002awf,2015-05-03T04:35:26.775Z,"193km SE of Sarangani, Philippines",earthquake',
  '2015-05-02T17:58:39.970Z, Alaska,4.4,mb,,164,0.468,0.5,us,us20002aw0,2015-05-03T02:02:34.463Z,"15km ENE of Attu Station, Alaska",earthquake',
  '2015-05-02T16:50:46.840Z, Japan,5.7,mb,,102,1.546,1.48,us,us20002avl,2015-05-03T00:54:03.967Z,"168km SSE of Hachijo-jima, Japan",earthquake',
  '2015-05-02T16:23:07.980Z, Michigan,4.2,mwr,,73,0.674,0.62,us,us20002avh,2015-05-04T18:42:27.067Z,"8km S of Galesburg, Michigan",earthquake',
  '2015-05-02T15:01:45.000Z, Alaska,3.3,ml,,,,0.74,ak,ak11577752,2015-05-02T23:04:20.208Z,"20km E of Y, Alaska",earthquake',
  '2015-05-02T14:37:49.410Z, Peru,4.6,mb,,151,3.14,0.39,us,us20002av7,2015-05-02T22:41:25.478Z,"90km SW of Mollendo, Peru",earthquake',
  '2015-05-02T13:46:47.960Z, Indonesia,4.1,mb,,87,3.867,0.36,us,us20002av3,2015-05-02T21:49:30.046Z,"246km S of Amahusu, Indonesia",earthquake',
  '2015-05-02T12:45:58.310Z, Turkey,4,mb,,51,0.966,0.97,us,us20002aux,2015-05-02T20:48:30.376Z,"6km W of Gozyeri, Turkey",earthquake',
  '2015-05-02T11:59:16.400Z, Guatemala,4.8,mb,,127,1.35,1.13,us,us20002aur,2015-05-02T20:01:47.240Z,"3km W of San Bartolo, Guatemala",earthquake',
  '2015-05-02T10:53:06.150Z, Papua New Guinea,5,mb,,59,0.937,0.98,us,us20002aul,2015-05-02T18:55:41.271Z,"93km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-02T09:51:44.050Z, Colombia,4.7,mb,,55,0.954,0.86,us,us20002aue,2015-05-02T10:14:21.027Z,"14km SW of Piedecuesta, Colombia",earthquake',
  '2015-05-02T09:02:41.510Z, Philippines,4.7,mb,,85,1.544,0.88,us,us20002aud,2015-05-02T09:47:20.693Z,"1km SSE of Malisbeng, Philippines",earthquake',
  '2015-05-02T08:23:44.620Z, Greece,5,mb,,48,1.175,0.61,us,us20002au8,2015-05-02T16:26:21.230Z,"75km S of Ierapetra, Greece",earthquake',
  '2015-05-02T08:01:09.300Z, Afghanistan,4.5,mb,,66,0.694,0.82,us,us20002au6,2015-05-02T16:03:50.370Z,"34km WSW of Ashkasham, Afghanistan",earthquake',
  '2015-05-02T05:35:46.360Z, Nepal,5,mb,,91,1.96,0.85,us,us20002atq,2015-05-04T17:30:50.220Z,"25km E of Khudi, Nepal",earthquake',
  '2015-05-02T05:23:45.640Z, Indonesia,4.6,mb,,57,1.92,0.95,us,us20002atn,2015-05-02T13:26:14.310Z,"76km SSE of Bitung, Indonesia",earthquake',
  '2015-05-02T03:55:06.000Z, Alaska,3.2,ml,,,,0.48,ak,ak11577362,2015-05-02T11:57:35.072Z,"77km WSW of Cantwell, Alaska",earthquake',
  '2015-05-02T01:43:13.210Z, Portugal,3.3,mb_lg,,,,0.19,us,us20002b1p,2015-05-03T22:37:55.487Z,"4km SSW of Braga, Portugal",earthquake',
  '2015-05-01T22:10:10.390Z, Nepal,3.9,mb,,120,1.147,0.99,us,us20002arr,2015-05-02T06:32:16.213Z,"4km ENE of Banepa, Nepal",earthquake',
  '2015-05-01T21:25:33.370Z, Croatia,4.1,mb,,,,0.82,us,us20002arf,2015-05-03T23:15:39.627Z,"11km SE of Podgora, Croatia",earthquake',
  '2015-05-01T20:00:07.120Z, Argentina,4.6,mb,,52,2.095,1.55,us,us20002aqv,2015-05-02T04:02:49.440Z,"109km W of El Aguilar, Argentina",earthquake',
  '2015-05-01T19:55:56.740Z, Papua New Guinea,4.9,mb,,69,2.149,0.56,us,us20002aqx,2015-05-02T16:27:43.928Z,"124km ESE of Kimbe, Papua New Guinea",earthquake',
  '2015-05-01T19:32:19.600Z, Hawaii,3,ml,,164,0.032,0.29,us,us20002aqr,2015-05-02T15:19:55.908Z,"9km S of Volcano, Hawaii",earthquake',
  '2015-05-01T19:30:57.210Z, Hawaii,3.15,ml,29,74,0.01362,0.08,hv,hv60912081,2015-05-04T15:02:52.758Z,"4km S of Volcano, Hawaii",earthquake',
  '2015-05-01T19:04:05.200Z, British Virgin Islands,3.3,Md,7,284.4,1.06540193,0.17,pr,pr15121005,2015-05-02T14:43:41.040Z,"146km N of Road Town, British Virgin Islands",earthquake',
  '2015-05-01T17:47:57.310Z, Japan,4.4,mb,,109,1.045,0.97,us,us20002aq3,2015-05-02T14:34:18.161Z,"135km ENE of Hachinohe, Japan",earthquake',
  '2015-05-01T17:16:03.420Z, Panama,4.6,mb,,77,2.982,1.13,us,us20002apv,2015-05-02T13:36:20.770Z,"282km S of Punta de Burica, Panama",earthquake',
  '2015-05-01T16:56:42.210Z, Japan,4.8,mb,,136,1.066,1.24,us,us20002apm,2015-05-02T00:59:26.270Z,"144km ENE of Hachinohe, Japan",earthquake',
  '2015-05-01T16:00:10.060Z, Fiji,4.5,mb,,88,3.027,1.11,us,us20002ape,2015-05-02T00:02:47.549Z,"235km SE of Lambasa, Fiji",earthquake',
  '2015-05-01T15:09:58.220Z, Afghanistan,4.1,mb,,180,0.709,0.45,us,us20002ap1,2015-05-01T23:12:42.609Z,"44km N of `Alaqahdari-ye Kiran wa Munjan, Afghanistan",earthquake',
  '2015-05-01T15:04:44.200Z, Indonesia,4.1,mb,,142,3.593,0.44,us,us20002anx,2015-05-01T23:07:21.235Z,"77km S of Plampang, Indonesia",earthquake',
  '2015-05-01T12:58:02.540Z, Japan,4.7,mb,,68,0.743,0.64,us,us20002an7,2015-05-01T21:00:37.541Z,"82km N of Yonakuni, Japan",earthquake',
  '2015-05-01T08:58:41.570Z, India,5.3,mb,,98,1.203,0.71,us,us20002aml,2015-05-01T14:37:39.993Z,"135km SW of Port Blair, India",earthquake',
  '2015-05-01T08:06:04.990Z, Papua New Guinea,6.8,mww,,18,1.061,0.77,us,us20002am6,2015-05-01T13:56:23.000Z,"106km SSW of Kokopo, Papua New Guinea",earthquake',
  '2015-05-01T07:42:39.300Z, Ecuador,4.5,mb,,84,3.748,0.72,us,us20002am5,2015-05-01T15:45:21.900Z,"38km S of Playas, Ecuador",earthquake',
  '2015-05-01T07:32:54.960Z, Oklahoma,3.9,mb_lg,,26,0.164,0.74,us,us20002am2,2015-05-02T09:04:49.515Z,"23km ENE of Mooreland, Oklahoma",earthquake',
  '2015-05-01T06:02:19.900Z, Puerto Rico,3.4,Md,16,187.2,0.29105415,0.2,pr,pr15121000,2015-05-01T14:04:51.219Z,"32km NNW of Culebra, Puerto Rico",earthquake',
  '2015-05-01T02:55:54.110Z, Mexico,4.4,mb,,197,1.526,0.84,us,us20002al5,2015-05-01T04:01:41.997Z,"25km S of Tres Picos, Mexico",earthquake',
  '2015-05-01T02:46:20.840Z, Indonesia,5,mb,,65,2.91,1.24,us,us20002al3,2015-05-01T17:05:21.110Z,"123km S of Pujiharjo, Indonesia",earthquake',
  '2015-05-01T02:00:58.630Z, Hawaii,3.03,ml,28,80,0.00959,0.14,hv,hv60910911,2015-05-01T10:03:39.218Z,"5km S of Volcano, Hawaii",earthquake',
  '2015-05-01T00:21:09.650Z, New Caledonia,5.1,mb,,43,3.956,0.74,us,us20002aki,2015-05-01T08:23:42.525Z,"151km WNW of Ile Hunter, New Caledonia",earthquake',
  '2015-04-30T19:21:18.190Z, India,4.8,mb,,45,2.74,1.53,us,us20002aid,2015-05-01T18:24:03.137Z,"5km SSW of Tuensang, India",earthquake',
  '2015-04-30T18:13:41.000Z, Alaska,3,ml,,,,0.6,ak,ak11575987,2015-05-01T02:16:14.552Z,"49km S of Kodiak, Alaska",earthquake',
  '2015-04-30T17:34:37.350Z, Nepal,3.8,mb,,178,5.501,1.07,us,us20002ajz,2015-05-04T11:47:20.655Z,"14km WSW of Panaoti, Nepal",earthquake',
  '2015-04-30T16:49:36.440Z, Philippines,4.5,mb,,69,1.451,1.06,us,us20002ahh,2015-05-01T13:59:31.651Z,"64km S of Pondaguitan, Philippines",earthquake'];


var arrResultado = [];

function transformacionTerremotos(arrGigante) {

	var arrGiganteInstancia = [];
	var objRepeticiones = {};
	var pais = "";
	var arrKeys = [];

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//muy mal cuando lo declare aca porque al ser global, quedaba con el ultimo valor cargado al 
	//salir de la fx y desde afuera solo se guardaba el ultimo valor del objeto en el array!!!!!!!
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//var objResultado = {};

	for (i=0; i < arrGigante.length; i++) {
		arrGiganteInstancia = arrGigante[i].split(",");

		pais = arrGiganteInstancia[1].trim();

		if (objRepeticiones[pais] !== undefined) {
			//ya existe esa instancia de pais en objRepeticiones
			//la acumulo
			objRepeticiones[pais]++;
		} else {
			//no existia esa instancia de pais en objRepeticiones
			//la creamos
			objRepeticiones[pais]=1;
		}
	}

	arrKeys = Object.keys( objRepeticiones );
	console.log(arrKeys);

	for ( i=0; i < arrKeys.length; i++) {
		//por cada instancias de objRepeticiones armo una instancia de objResultado
		//y lo voy volcando a un array que será el array de objetos, y es el array de salida

		//super importante declarar este objeto localmente!!!!!!!!!
		var objResultado={};	

		objResultado["name"] = arrKeys[i];
		objResultado["value"] = objRepeticiones[arrKeys[i]];
		//console.log("obj resultado tiene ", objResultado);

		arrResultado[i] = objResultado;
		//console.log("i es ",i," y arrResultado tiene ", arrResultado[i]);
	}

	//return arrResultado;
}

//arrRepresentacion = transformacionTerremotos(arrTerremotos);
transformacionTerremotos(arrTerremotos);

console.log("arrResultado fuera 0 es " , arrResultado[0]);
console.log('arrResultado fuera 1 es ',  arrResultado[1]);
console.log('arrResultado fuera 2 es ',  arrResultado[2]);
//init(arrResultado);

