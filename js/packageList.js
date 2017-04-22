app.controller('packageList',
	function($scope){
		$scope.packages = [
			{
				name: "Bach to Basics",
				image: "img/package-1.png",
				numOfTracks: 2,
				features: ["2 x compositions, 10-20s in length. 40 seconds of original music"],
				usp: "Perfect for short looping soundtracks or trailers.",
				price: 50,
				boltOns: [
					{name:"Full sheet music", selected: false},
					{name:"Audio stems", selected: false},
				],
			},
			{
				name: "Chopin Around",
				image: "img/package-2.png",
				features: ["3 x compositions, 30-60s in length. 3 minutes of original music"],
				numOfTracks: 3,
				usp: "Perfect for short looping soundtracks or trailers.",
				price: 100,
				boltOns: [
					{name:"Full sheet music", selected: false},
					{name:"Audio stems", selected: false},
				],
			},
			{
				name: "A Lot to Handel",
				image: "img/package-3.png",
				features: ["4 x compositions of varying lengths. 8 minutes of original music"],
				numOfTracks: 4,
				usp: "Perfect for customising your music to your project’s needs.",
				price: 250,
				boltOns: [
					{name:"Audio stems", selected: false},
				],
			},
			{
				name: "The Full Monteverdi",
				image: "img/package-4.png",
				features: ["A full soundtrack of 10 compositions totalling 20 minutes of original music"],
				numOfTracks: 10,
				usp: "Perfect for continuous, unified soundtracks for larger projects with a higher budget.",
				price: 500,
			}
		];

		$scope.removeSpaces = function(item){
			return item.split(' ').join('');
		};

		$scope.applyExtra = function(package, item){
			if(item.selected){
				if(item.name=="Full sheet music"){
					package.price += (package.numOfTracks * 10)
				}else{
					package.price += (package.numOfTracks * 10)
				}
			}else{
				if(item.name=="Full sheet music"){
					package.price -= (package.numOfTracks * 10)
				}else{
					package.price -= (package.numOfTracks * 10)
				}
			}
		}
	}
	
);
	