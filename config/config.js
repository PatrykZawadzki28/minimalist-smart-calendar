/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

	language: "pl",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [{
			module: "clock",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Zabrze",
				locationID: "3080985", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4f41277c1e780ae2ccb2908ea0802a20"
			}
		},
		// {
		// 	module: "calendar",
		// 	header: "Kalendarz",
		// 	position: "upper_third",
		// 	config: {
		// 		calendars: [{
		// 			symbol: "calendar-check",
		// 			url: "https://calendar.google.com/calendar/ical/patryk.zawadzki27%40gmail.com/private-3d146171f757959088b326762c3aedb6/basic.ics"
		// 		}]
		// 	}
		// },
		{
			module: "MMM-cryptocurrency",
			position: "top_center",
			config: {
				apikey: '03c28481-a66e-45e5-a38e-6f61dad6bbeb',
				currency: ['ethereum', 'bitcoin', 'cardano', 'dogecoin'],
				conversion: 'PLN',
				headers: ['change24h', 'change7d'],
				displayType: 'detail',
				fontSize: 'xx-small',
				showGraphs: false
			}
		},
		{
			module: 'MMM-CalendarExt2',
			config: {
				calendars: [{
					url: "https://calendar.google.com/calendar/ical/patryk.zawadzki27%40gmail.com/private-3d146171f757959088b326762c3aedb6/basic.ics",
				}, ],
				views: [{
					name: "Plan Tygodniowy",
					title: "Plan",
					mode: "daily",
					type: "row",
					position: "bottom_bar",
					slotCount: 5,
					locale: "pl",
					hideOverflow: false,
					filterPassedEvent: true,
					slotTitleFormat: {
						sameDay: "[dzisiaj]",
						nextDay: "[jutro]",
						nextWeek: "dddd",
						sameElse: "mm/Do"
					},
				}, ],
				scenes: [{
					name: "DEFAULT",
				}, ],
			},
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Pogoda",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "forecast",
		// 		location: "Zabrze",
		// 		locationID: "3080985", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "4f41277c1e780ae2ccb2908ea0802a20"
		// 	}
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
