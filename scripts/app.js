	var app = angular
	    .module('LHSWeb', [
			'ui.router', 'uiRouterStyles', 'ui.bootstrap',
		])
	app.controller('NavCtrl', function ($scope, $location) {
	        $scope.isActive = function (route) {
	            return route === $location.path();
	        };
	    })
	    .controller('CarouselCtrl', function ($scope) {
	        $scope.$on('$viewContentLoaded', function () {
	            var $window = $(window).on('resize', function () {
	                var height = $(this).height() - $('#topnavbar').height();
	                $('.photo-carousel > div').height(.7 * height);
	            }).trigger('resize');

	            $('.photo-carousel').slick({
	                autoplay: true,
	                autoplaySpeed: 8000,
	                dots: true
	            });
	        });
	    })
	    .controller('CalendarCtrl', function ($scope) {
	        $scope.$on('$viewContentLoaded', function () {
	            $('#calendar').fullCalendar({
	                googleCalendarApiKey: 'AIzaSyBXUF57HvQ6O_va1z21Rkhr63TkJQKumCM',
	                events: {
	                    googleCalendarId: 'tjlatinhonorsociety@gmail.com'
	                }
	            });
	        });
	    })
	    .controller('AboutCtrl', function ($scope) {
	        Grid.init();
	    })
	    .controller('BlogCtrl', function ($scope, $sce) {
	        $scope.Math = window.Math;
	        $scope.articles = [
	            {
	                author: "Atticus Sun",
	                date: "May 8, 2016",
	                title: "All in a Blur",
	                banner: "blur.jpg",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi everyone! I hope you had a stellar past few months. TJ Latin certainly has! Sorry you haven't seen much of me lately (my deepest apologizes to our billions of fanatic readers). I've been out and about across the country for college visits and other assorted events, but do not worry - I was always thinking about TJ Latin when I was gone! It will be one of the (few) things I truly will miss about high school. (Besides, if you want an update on what's been going on, feel free to check out our beautiful newsletter on the website!) It deeply saddens me to think that I will be gone in just a few weeks (horreo, horreo!), but I am glad I will be able to return to the TJ Latin family during National convention! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TJ has done quite a bit this year already. We had an excellent Induction Ceremony for the new children joining TJ Latin, replete with a decorative tree that represented Daphne. We also had our annual Certamen - the first one we've had since my freshman year (thanks a lot, renovation). It went fantastically, and I got to dress up in a suit! Furthermore, we had our always-wonderful Lupercalia and Ides of March celebrations. For Lupercalia, we united the two adjacent Latin rooms and played a fun game involving fertilization, couples, and wolves! The winners got cupcakes. For the Ides of March, we planned a detailed itinerary for our TJ Latin cult to walk around the school. After marching up some stairs, we ended up on the newly-built Nobel Commons, which is this section of the second floor supported by columns (how very classic!). Then we performed a reenactment of Shakespeare's Julius Caesar in which Caesar is stabbed (by me!) and dies. It was a fantastic time. Last, we celebrated Rome's birthday with a variety of activities. One of the perennial favorite activities is the 'boulder throw,' in which students take turns throwing a beanbag boulder as far as possible. I was not the victor (and to top it all off, when I was throwing, I let out an embarrassingly high-pitched shriek. Oops). However, it turns out that our TJ Latin family is so strong this year that the beanbag actually ripped! Several of our members had to actually stay back in the gym and clean up the spilled styrofoam entrails of the beanbag. And that's about it! I think that's a good note to end on - the strength of the TJ Latin family! May it persist throughout this week when our dear AP Latin students will be taking their exams. Good luck to you all!",
				},
	            {
	                author: "Atticus Sun",
	                date: "January 30, 2016",
	                title: "New Year, Ancient Traditions",
	                banner: "newyear.jpeg",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Happy New Year, everyone! It’s January 30, and the first month of 2016 is drawing to a close. It’s also the year of my graduation - eek! Although it seems like there is great change in the future for me personally, I find comfort in the old, hallowed traditions of Latin Honor Society. A standout moment took place this month during our Latin Honor Society Induction Ceremony! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TJHSST’s Latin Honor Society Induction Ceremony is a fiercely guarded (complete with two ianitores) and exclusive event. Lights are dimmed, lost students not in Latin are shooed away, and smoke alarms may or may not be triggered. As one of the consuls this year, my job was to help set up for the ceremony! It’s important that everything is in the right, perfect position, because we want all the Latin Honor Society inductees to understand the torch that they are carrying and the gravity of their work. It seems like a silly half-hour event (which it is - we like to poke fun at ourselves), but it is important. No matter how over-the-top it may be, it is memorable. (I still remember my own induction ceremony perfectly!) And that’s what we want to drive home: Latin is not just another club, and it’s not just another class, either. It’s a place where you make memories. You should not only be learning about a historic language and the history of the Romans, but also writing your own personal history. Years later, we will look back upon these moments in our lives, pinpointing the highlights of our high school career. It is our job as Latin Honor Society officers to make sure Latin provides those standout moments. From memorizing test info on the bus to Convention to celebrating that gold medal on the National Latin Exam, Latin is a place where memories are made. Trust me: I can speak from experience. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And since it hasn’t been done yet, with the arrival of the new year, it’s also an appropriate time to announce the new officers for Latin Honor Society! We had our election a while ago, and I’m glad to announce that the new officer team is fantastic (and I’m not just saying that because I’m on the new officer team). Your lowly webmaster of last year is now a co-consul, along with Daniel Chae! And for those millions of readers who are tearing up at the thought of losing me to college next year, don’t worry: I’m training an excellent apprentice (a dominala tela, you might call her), Katie Tam. I’ve left the site relatively well organized, and I’m hoping that Katie can pick ups he ropes quickly and, of course, improve upon my work! That’s all for this month, folks. Please be sure to check our pictures, a new list of awards on the website, and our section for study games and quizzes! Have a great day!",
				},
	            {
	                author: "Atticus Sun",
	                date: "June 1, 2015",
	                title: "May Update",
	                banner: "summer.jpg",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As the year draws to a close, I can't believe I'm writing the last update for the 2014-2015 school year. It's been an absolutely thrilling ride, and I've been so lucky and fortunate to have been able to work with such an outstanding team of officers this year. Being involved in Latin has been so fun, fulfilling officer duties never even felt like work! From building a completely new website for TJ Latin to celebrating Rome's birthday, I look back on this year with nothing but fondness. It's incredibly bittersweet to think that next year will be my last in TJ Latin. I will miss everything about it - including the amazing activities that took place in the month of May this year! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; First, AP Latin students took the AP Latin Exam on Friday, May 15 after lunch, the very last AP exam on the very last day of AP weeks. Leading up to the exam, students prepared by reviewing The Aeneid and De Bello Gallico feverishly, creating flashcards and checking translations. Ms. Conklin, our teacher, continued the yearly tradition of organizing multiple AP Latin study sessions at various students' houses! It was a crazy ride to the AP, but we were all extremely satisfied when it was over. We worked hard this year, and we hope it showed on the exam! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next, Latin Honor Society officers held a special end-of-year dinner to commemorate TJ Latin's amazing accomplishments for the 2014-2015 school year. (Sensibly, we ate at a restaurant called The Italian Cafe.) Junior officers all got the senior officers gifts and handwritten cards, and the consuls presented Mrs. Lister and Ms. Conklin with gifts as well. It made us all realize how much we love TJ Latin and how close we've grown together as a family this year, and I'm so glad that we were all able to come together. At a school like ours where the stress is nonstop, it can be hard to take a step back and really reflect on what's most important - people. TJ LHS officers are some of the kindest, most devoted, and most hardworking people I've ever met, and I have learned so much this year. Seniors, thank you for all you've done this year, and thank you to Mrs. Lister and Ms. Conklin for all their amazing work throughout the years. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sorry for the sappiness in this post! I'm really sad that this will be the last update for this year and even more so to see the seniors leave, but I'm also filled with a sense of hope for the new year. I'm glad that I still have a year left, and incredibly excited to see what amazing things we do next year. Excuse the cheesiness, but Latin Honor Society, just like Rome, will continue to endure not just at TJ, but also forever in our minds and hearts. Thank you everyone for being a part of LHS, and have a great summer!",
				},
	            {
	                author: "Atticus Sun",
	                date: "May 1, 2015",
	                title: "April Update",
	                banner: "birthday.jpg",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Happy birthday, Rome! The ancients celebrated Rome’s birthday on April 21 - and we did too! (Well, a day later.) They calculated that the city was founded in 753 BC, that is, 2,768 years ago, a date that archaeology suggests was roughly correct. April 21 is more than just the birthday of our favorite city. Arguably, it is the birthday of Western civilization as we know it. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The West may have begun in Greece, but it was Rome that spread Greek thought to unimaginable distances across the empire. Rome stood for western unity in Europe, something that is still lacking even today. And don't forget the fact that the Catholic Church, with 1.2 billion members worldwide, has its roots in Rome as the largest Christian denomination! Rome has a lot to be proud of, and that legacy endures to today. Citizens of Rome actually dress up every year on April 21 in ancient clothing to celebrate the rich and powerful history of their city! But what exactly occurred on April 21? That is answered by the famous Romulus and Remus myth. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Romulus and Remus were twin brothers. They were abandoned by their parents as babies and put into a basket that was then placed into the River Tiber. The basket ran aground and the twins were discovered by a female wolf. The wolf nursed the babies for a short time before they were found by a shepherd. The shepherd then brought up the twins. When Romulus and Remus became adults, they decided to found a city where the wolf had found them. The brothers quarrelled over where the site should be and Remus was killed by his brother. This left Romulus the sole founder of the new city and, on April 21, he gave his name to it – Rome! He had chosen a spot on the Palatine Hill, not far from where he and his now-deceased brother had been raised by the she-wolf. This small Latin village would grow to the capital of a giant Mediterranean empire, then a ghost town dominated by the Pope, before finally becoming the capital of a reunited Italy. Felix sit natalis die, Roma! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We held our very own special Rome birthday celebration, too! Everyone wore our wonderful pink TJ Latin shirts throughout the day, showing off the Latin pride. We gathered during 8th period to hold various Rome-theme activities! These included a Trojan Horse full of candy (read: pinata), a Turnus-style boulder toss, a three-person race with team members representing Aeneas, Anchises, and Ascanius, a hurdle race over the walls of Rome, and of course eating cake! It was incredibly fun, and the event definitely represents a highlight of TJ Latin. Even though ancient Rome is long gone, its spirit is as lively as ever, creating an unbreakable bond between the members of our club. Check out the photos we just added to see more!",
				},
	            {
	                author: "Atticus Sun",
	                date: "April 1, 2015",
	                title: "February & March Update",
	                banner: "ides.jpg",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beware the Ides of March! The last two months have been extremely active here at TJ, and we're so glad you could join us for all that's happened! For one, there's a new issue of the Scribe out - go check out the Newsletter portion of our site! This issue is huge because it covers all of the winter months (the Scribe is seasonal now, like many famous and established publications, such as Original Plumbing and The New Electric Railway Journal). Check out all the cool stuff that's happened in the few months with the Scribe, as well as interviews with Latin students and fun trivia! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Two huge events took place in the past few months: Lupercalia and the Ides of March in February and March, respectively. For the uninitiated, Lupercalia may have started at the time of the founding of Rome (traditionally 753 B.C.) or even before. It ended about 1200 years later, at the end of the 5th century A.D., at least in the West, although it continued in the East for another few centuries. The origins of the festival are obscure, although the likely derivation of its name from lupus has variously suggested connection with an ancient deity who protected herds from wolves and with the legendary she-wolf who nursed Romulus and Remus. As a fertility rite, the festival is also associated with the god Faunus. Each Lupercalia began with the sacrifice by the Luperci of goats and a dog, after which two of the Luperci were led to the altar, their foreheads were touched with a bloody knife, and the blood was wiped off with wool dipped in milk; the ritual required that the two young men laugh. The sacrificial feast followed, after which the Luperci cut thongs from the skins of the sacrificial animals and ran in two bands around the Palatine hill, striking with the thongs at any woman who came near them. A blow from the thong was supposed to render a woman fertile. Well, of course, TJ had to put its own spin on what sounds like such a delightful, kid-friendly activity! During an 8th period party, we feasted and played our own Lupercalia game, with pairs of kids running around trying to escape from the 'wolf.' The 'wolf' could enter a pair by forcing one of the two out. The displaced person would then have to become 'fertile' by being slapped with a tail, and then take on the role as a wolf. It was an experience. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Ides of March is a time-honored tradition which is equally as fun! Our two consuls Orchi and Nolan took on the roles of Caesar and Marc Antony, respectively, while Peter Kim took on the role of Brutus. We chanted through the halls of TJ before arriving at the scene of the crime. As Caesar was murdered, red gushed through the air - but not blood! Instead, delicious Twizzlers were thrown about, and everyone was happier than they probably should have been on the anniversary of Caesar's death. All in all, it's been a wonderful two months!",
				},
	            {
	                author: "Atticus Sun",
	                date: "February 1, 2015",
	                title: "January Update",
	                banner: "janus.JPG",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hope you had an excellent first month of 2015! We certainly did. On the 21st, Latin 1 and 2 students decorated Roman-style cookies, which was really fun. The Romans didn't have cookies, of course: instead, they usually had honey-sweetened cakes and fruit. Two favorite desserts were stuffed dates and honeyed bread, and another was poppy seeds mixed with honey. These would be eaten at the secunda mensa - yum! Apicius, a popular Roman chef, produced an ancient cookbook which can still be used today allowing any of us to throw together a meal very much like that eaten by the ordinary people, the plebians of Rome. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TJ students also participated in the nationwide Secret Saturnalia gift exchange, which finally concluded in January! But perhaps the greatest gift of all was beginning Caesar for the AP students after Dido <b> finally </b> died. (Seriously, it took her long enough.) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We also had a really fun Certamen competition at Flint Hill on January 10th! Certamen (Latin for contest) is a game of fast recall of facts about classical civilizations and its peoples, languages, and cultures I'm proud to say that Tj did great. In Level 1A, TJ took first, as well as in Level 2. We also took first in Level 3! Great job, guys! The season concludes in April with the State Finals, again hosted by the remarkably-efficient-for-a-bunch-of-sleep-deprived-college-students VSCL. Several VJCL chapter schools currently host certamen tournaments throughout the year. For more study materials for Certamen, please check out the other portions of the website! ",
				},
	            {
	                author: "Atticus Sun",
	                date: "January 1, 2015",
	                title: "December Update",
	                banner: "winter-scene.png",
	                text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laetus Novus Annis, amici! The past few months in TJ Latin have been absolutely great, and the start of the new year brings the promise of even better things to come. What are your suggestions for TJ Latin? Do you have any new ideas? Study guides? Feel free to email us at tjlatinhonorsociety@gmail.com! <br > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This past month (and start of the school year in general) has definitely been a whirlwind of excitement. The highlight of December was of course our annual Secret Saturnalia gift exchange and party. In the spirit of Latin poetry, we each wrote a poem for our secret other Latin student and delivered it in class. The poems were either about the person, their Latin name (do they have any other?), or the present being received. Students also brought in a bunch of desserts, too! Feel free to head on over to Events > Pictures > Saturnalia and take a look at some happy pairings receiving their gifts. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Oh, and I hope you guys liked the total, complete redesign of the website last month! It was really fun to make and hopefully it makes the website a little nicer. If you have any feedback, feel free to tell me in person or whenever you want to. That’s all for now, hope you have a nice day and great start to the new year!",
				},

			];

	        $scope.approximateTime = function (string) {
	            return Math.ceil(string.split(" ").length / 180);
	        };

	        $scope.trustAsHtml = function (string) {
	            return $sce.trustAsHtml(string);
	        }
	    })
	    .controller('AccordionCtrl', function ($scope) {
	        $scope.oneAtATime = true;

	        $scope.groups = [
	            {
	                title: 'Dynamic Group Header - 1',
	                content: 'Dynamic Group Body - 1'
			},
	            {
	                title: 'Dynamic Group Header - 2',
	                content: 'Dynamic Group Body - 2'
			}
			];

	        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	        $scope.addItem = function () {
	            var newItemNo = $scope.items.length + 1;
	            $scope.items.push('Item ' + newItemNo);
	        };

	        $scope.status = {
	            isFirstOpen: true,
	            isFirstDisabled: false
	        };
	    })
	    .controller('ScribeCtrl', function ($scope, $sce) {
	        $scope.currentUrl = $sce.trustAsResourceUrl("https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2015-2016%2FWinter.pdf&embedded=true");

	        $scope.yearLinks = {
	            "2016": [
	                {
	                    month: "Winter",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2015-2016%2FWinter.pdf&embedded=true"
	                },
                ],
	            "2015": [
	                {
	                    month: "Fall",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2015-2016%2FFall.pdf&embedded=true"
	                },
				],
	            "2014": [
	                {
	                    month: "Fall",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2014-2015%2FSept_Oct.pdf&embedded=true"
	                },
	                {
	                    month: "Winter",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2014-2015%2FWinter.pdf&embedded=true"
	                }
				],
	            "2013": [
	                {
	                    month: "September/October",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2013-2014%2FSept_Oct.pdf&embedded=true"
	                }
				],
	            "2012": [
	                {
	                    month: "September/October",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2012-2013%2FSept_Oct.pdf&embedded=true"
	                },
	                {
	                    month: "November/December",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2012-2013%2FNov_Dec.pdf&embedded=true"
	                },
	                {
	                    month: "January/February",
	                    link: "https://docs.google.com/viewer?url=http%3A%2F%2Ftjlatin.figroll.in%2Fdocs%2Fscribe%2F2012-2013%2FJan_Feb.pdf&embedded=true"
	                }
				],
	        };

	        $scope.setNewSource = function (url) {
	            $scope.currentUrl = $sce.trustAsResourceUrl(url);
	        }
	    })
	    .controller('QuizCtrl', function ($scope) {
	        $scope.browsingLevels = true;

	        $scope.switch = function () {
	            $scope.browsingLevels = !$scope.browsingLevels;
	        };

	        $scope.setLevel = function (level) {
	            $scope.level = level;
	            $scope.browsingLevels = false;
	        };

	    })
	    .controller('ImageCtrl', function ($scope, $sce) {
	        $scope.browsingAlbums = true;

	        $scope.years = ["2016", "2015", "2014"];
	        $scope.thumbs = {
	            "2016": [
	                {
	                    title: "Rome's Birthday",
	                    description: "We celebrate April 21, Rome's birthday, in a variety of ways! First, we have a she-wolf pinata filled with candy to represent the founding story of Rome. We then do a 'boulder throw' that is reminiscent of Turnus's boulder-throwing competition with Aeneas. Finally, we have a hurdle competition where students must jump over the 'walls' of Rome, which get loftier and loftier with each pass!",
	                    thumbnail: "img/albums/romesbirthday2016/1.jpg",
	                    filepath: "romesbirthday2016",
	                    images: [
	                        {
	                            title: '',
	                            filename: '1.jpg'
						}, {
	                            title: '',
	                            filename: '2.jpg'
						}, {
	                            title: '',
	                            filename: '3.jpg'
						}, {
	                            title: '',
	                            filename: '4.jpg'
						}, {
	                            title: '',
	                            filename: '5.jpg'
						}, {
	                            title: '',
	                            filename: '6.jpg'
						}, {
	                            title: '',
	                            filename: '7.jpg'
						}, {
	                            title: '',
	                            filename: '8.jpg'
						}, {
	                            title: '',
	                            filename: '9.jpg'
						}, {
	                            title: '',
	                            filename: '10.jpg'
						}, {
	                            title: '',
	                            filename: '11.jpg'
						}, {
	                            title: '',
	                            filename: '12.jpg'
						}, {
	                            title: '',
	                            filename: '13.jpg'
						}, {
	                            title: '',
	                            filename: '14.jpg'
						}, {
	                            title: '',
	                            filename: '15.jpg'
						}, {
	                            title: '',
	                            filename: '16.jpg'
						}, {
	                            title: '',
	                            filename: '17.jpg'
						}, {
	                            title: '',
	                            filename: '18.jpg'
						}, {
	                            title: '',
	                            filename: '19.jpg'
						}, {
	                            title: '',
	                            filename: '20.jpg'
						}, {
	                            title: '',
	                            filename: '21.jpg'
						},
					]
	                },
	                {
	                    title: "Ides of March",
	                    description: "Taking place on March 14, 2016 (yes, we know, let's leave it at logistical issues, okay?), the Ides of March is an annual event event where we commemorate the date of Julius Caesar's death by marching around the school wearing our Latin t-shirts and chanting 'Beware the Ides of March!' Everyone not in Latin gets a little confused, but we love it. We finish our march with a reenactment of Caesar's murder from the famous Shakespeare play. When it's over, we throw Twizzlers through the air to represent the bloodshed, and everyone has fun!",
	                    thumbnail: "img/albums/idesofmarch2016/1.jpg",
	                    filepath: "idesofmarch2016",
	                    images: [
	                        {
	                            title: '',
	                            filename: '1.jpg'
						}, {
	                            title: '',
	                            filename: '2.jpg'
						}, {
	                            title: '',
	                            filename: '3.jpg'
						}, {
	                            title: '',
	                            filename: '4.jpg'
						}, {
	                            title: '',
	                            filename: '5.jpg'
						}, {
	                            title: '',
	                            filename: '6.jpg'
						}, {
	                            title: '',
	                            filename: '7.jpg'
						}, {
	                            title: '',
	                            filename: '8.jpg'
						}, {
	                            title: '',
	                            filename: '9.jpg'
						}, {
	                            title: '',
	                            filename: '10.jpg'
						}, {
	                            title: '',
	                            filename: '11.jpg'
						}, {
	                            title: '',
	                            filename: '12.jpg'
						}, {
	                            title: '',
	                            filename: '13.jpg'
						}, {
	                            title: '',
	                            filename: '14.jpg'
						}, {
	                            title: '',
	                            filename: '15.jpg'
						}, {
	                            title: '',
	                            filename: '16.jpg'
						}, {
	                            title: '',
	                            filename: '17.jpg'
						}, {
	                            title: '',
	                            filename: '18.jpg'
						},
					]
	                },
	                {
	                    title: "INite",
	                    description: "On April 2, 2016, TJ hosted its annual INite (International Night), a cultural performance showcase that draws an audience of thousands to the George Mason university Performing Arts Center every single year. This year was the first in which TJ Latin participated. Check out the photos of our performance!, which incorporated a gladiator fight and Greek dancing!",
	                    thumbnail: "img/albums/inite2016/40.jpg",
	                    filepath: "inite2016",
	                    images: [
	                        {
	                            title: '',
	                            filename: '1.jpg'
						}, {
	                            title: '',
	                            filename: '2.jpg'
						}, {
	                            title: '',
	                            filename: '3.jpg'
						}, {
	                            title: '',
	                            filename: '4.jpg'
						}, {
	                            title: '',
	                            filename: '5.jpg'
						}, {
	                            title: '',
	                            filename: '6.jpg'
						}, {
	                            title: '',
	                            filename: '7.jpg'
						}, {
	                            title: '',
	                            filename: '8.jpg'
						}, {
	                            title: '',
	                            filename: '9.jpg'
						}, {
	                            title: '',
	                            filename: '10.jpg'
						}, {
	                            title: '',
	                            filename: '11.jpg'
						}, {
	                            title: '',
	                            filename: '12.jpg'
						}, {
	                            title: '',
	                            filename: '13.jpg'
						}, {
	                            title: '',
	                            filename: '14.jpg'
						}, {
	                            title: '',
	                            filename: '15.jpg'
						}, {
	                            title: '',
	                            filename: '16.jpg'
						}, {
	                            title: '',
	                            filename: '17.jpg'
						}, {
	                            title: '',
	                            filename: '18.jpg'
						}, {
	                            title: '',
	                            filename: '19.jpg'
						}, {
	                            title: '',
	                            filename: '20.jpg'
						}, {
	                            title: '',
	                            filename: '21.jpg'
						}, {
	                            title: '',
	                            filename: '22.jpg'
						}, {
	                            title: '',
	                            filename: '23.jpg'
						}, {
	                            title: '',
	                            filename: '24.jpg'
						}, {
	                            title: '',
	                            filename: '25.jpg'
						}, {
	                            title: '',
	                            filename: '26.jpg'
						}, {
	                            title: '',
	                            filename: '27.jpg'
						}, {
	                            title: '',
	                            filename: '28.jpg'
						}, {
	                            title: '',
	                            filename: '29.jpg'
						}, {
	                            title: '',
	                            filename: '30.jpg'
						}, {
	                            title: '',
	                            filename: '31.jpg'
						}, {
	                            title: '',
	                            filename: '32.jpg'
						}, {
	                            title: '',
	                            filename: '33.jpg'
						}, {
	                            title: '',
	                            filename: '34.jpg'
						}, {
	                            title: '',
	                            filename: '35.jpg'
						}, {
	                            title: '',
	                            filename: '36.jpg'
						}, {
	                            title: '',
	                            filename: '37.jpg'
						}, {
	                            title: '',
	                            filename: '38.jpg'
						}, {
	                            title: '',
	                            filename: '39.jpg'
						}, {
	                            title: '',
	                            filename: '40.jpg'
						}, {
	                            title: '',
	                            filename: '41.jpg'
						},
					]
	                },
	                {
	                    title: "Induction Ceremony",
	                    description: "TJ Latin's Induction Ceremony is a very secretive event. We dim the lights and make room for hundreds of students who are entering Latin Honor Society. Students who are in Latin 3 are eligible to join. Officers and magistrae lead the event, sharing tips for success in Latin, secret rituals, and, of course, cake.",
	                    thumbnail: "img/albums/induction2016/1.jpg",
	                    filepath: "induction2016",
	                    images: [
	                        {
	                            title: 'Omnes Sedent',
	                            filename: '1.jpg'
						}, {
	                            title: 'Magistrae in Vestimentibus',
	                            filename: '2.jpg'
						}, {
	                            title: 'Magistra Tenet Flammas',
	                            filename: '3.jpg'
						}, {
	                            title: 'Imago Primae Latinae',
	                            filename: '4.jpg'
						}, {
	                            title: 'Imago Secundae Latinae',
	                            filename: '5.jpg'
						}, {
	                            title: 'Imago Tertiae Latinae',
	                            filename: '6.jpg'
						}, {
	                            title: 'Imago Quartae Latinae',
	                            filename: '7.jpg'
						}, {
	                            title: 'Flammas',
	                            filename: '8.jpg'
						}, {
	                            title: 'Sacricium Malum',
	                            filename: '9.jpg'
						}, {
	                            title: 'O, Daphne',
	                            filename: '10.jpg'
						}, {
	                            title: 'Non Amat Daphne',
	                            filename: '11.jpg'
						}, {
	                            title: 'Amat Daphne',
	                            filename: '12.jpg'
						}, {
	                            title: 'Ambulant Protinus',
	                            filename: '13.jpg'
						}, {
	                            title: 'Cibum',
	                            filename: '14.jpg'
						}, {
	                            title: 'Dant Flores',
	                            filename: '15.jpg'
						}, {
	                            title: 'Impasti Discupuli',
	                            filename: '16.jpg'
						}, {
	                            title: 'Lacerat Cibum',
	                            filename: '17.jpg'
						}, {
	                            title: 'Manducant Una',
	                            filename: '20.jpg'
						}, {
	                            title: 'Quoque Manducant Una',
	                            filename: '21.jpg'
						},
					]
	                },

				],
	            "2015": [
	                {
	                    title: "VJCL Convention",
	                    description: "TJ Latin takes hundreds of students to VJCL Convention every year. This year, it took place on November 22-23. We won first in spirit this year, and several of our members took home prestigious awards! Our members competed in academic tests, oratorical contests, and even artistic competitions at the Richmond Convention Center. It was a great time, and we can't wait to come back next year!",
	                    thumbnail: "img/albums/convention2015/7.jpg",
	                    filepath: "convention2015",
	                    images: [
	                        {
	                            title: 'Sedemus',
	                            filename: '1.jpg'
						}, {
	                            title: 'Veteres Stamus',
	                            filename: '2.jpg'
						}, {
	                            title: 'Puellae Amicae',
	                            filename: '3.jpg'
						}, {
	                            title: 'Una Laeta, Una Miser',
	                            filename: '4.jpg'
						}, {
	                            title: 'Duo Laetae Cenam',
	                            filename: '5.jpg'
						}, {
	                            title: 'Ubi Concordia, Ibi Victoria (I)',
	                            filename: '6.jpg'
						}, {
	                            title: 'Ubi Concordia, Ibi Victoria (II)',
	                            filename: '7.jpg'
						}, {
	                            title: 'Sinistri',
	                            filename: '8.jpg'
						}, {
	                            title: 'Dextri',
	                            filename: '9.jpg'
						}, {
	                            title: 'Veteres et Magistrae',
	                            filename: '10.jpg'
						}, {
	                            title: 'Discupuli in Tertio Anno (I)',
	                            filename: '11.jpg'
						}, {
	                            title: 'Discupuli in Tertio Anno (II)',
	                            filename: '12.jpg'
						}, {
	                            title: 'Discupuli in Secundo Anno (I)',
	                            filename: '13.jpg'
						}, {
	                            title: 'Discupuli in Secundo Anno (I)',
	                            filename: '14.jpg'
						}, {
	                            title: 'Discupuli in Secundo Anno (II)',
	                            filename: '15.jpg'
						}, {
	                            title: 'Proprii Discupuli Magistrae',
	                            filename: '17.jpg'
						}, {
	                            title: 'AP Latin Discupuli',
	                            filename: '18.jpg'
						}, {
	                            title: 'Magistra Sinistra',
	                            filename: '20.jpg'
						}, {
	                            title: 'Magistra Dextra',
	                            filename: '21.jpg'
						}, {
	                            title: 'Liberi',
	                            filename: '22.jpg'
						}, {
	                            title: 'Latini Legatii',
	                            filename: '24.jpg'
						}, {
	                            title: 'Duo Puellae in Imaginarii Vestimentibus',
	                            filename: '26.jpg'
						}, {
	                            title: 'Puellae et Puer in Imaginarii Vestimentibus',
	                            filename: '28.jpg'
						}, {
	                            title: 'Aliquis',
	                            filename: '29.jpg'
						}, {
	                            title: 'Puer Paratus Bello',
	                            filename: '30.jpg'
						}, {
	                            title: 'Puella Vulnerata',
	                            filename: '31.jpg'
						}, {
	                            title: 'Discupuli Sustinent Ducem',
	                            filename: '33.jpg'
						}, {
	                            title: 'Tres Puellae in Imaginarii Vestimentibus',
	                            filename: '34.jpg'
						}, {
	                            title: 'Medusa',
	                            filename: '35.jpg'
						}, {
	                            title: 'Puellae et Magistra',
	                            filename: '36.jpg'
						}, {
	                            title: 'Artes Ostensa',
	                            filename: '39.jpg'
						}, {
	                            title: 'Ea Vincit!',
	                            filename: '40.jpg'
						}, {
	                            title: 'Moramur',
	                            filename: '41.jpg'
						}, {
	                            title: 'Sedent Ad Limen',
	                            filename: '42.jpg'
						}, {
	                            title: 'Puellae Legunt',
	                            filename: '43.jpg'
						}, {
	                            title: 'Durae Puellae',
	                            filename: '44.jpg'
						}, {
	                            title: 'Sceptrum',
	                            filename: '45.jpg'
						}, {
	                            title: 'In Ordine (I)',
	                            filename: '46.jpg'
						}, {
	                            title: 'In Ordine (II)',
	                            filename: '47.jpg'
						}, {
	                            title: 'Apollo Dux',
	                            filename: '48.jpg'
						}, {
	                            title: 'Soles',
	                            filename: '49.jpg'
						}, {
	                            title: 'Dura Puella Cum Sole',
	                            filename: '50.jpg'
						}, {
	                            title: 'Iter Magnum',
	                            filename: '51.jpg'
						}, {
	                            title: 'Senex Monstruosus',
	                            filename: '52.jpg'
						}, {
	                            title: 'Coniuctim',
	                            filename: '53.jpg'
						}, {
	                            title: 'State, Omnes!',
	                            filename: '54.jpg'
						}, {
	                            title: 'In Turba, Magistra',
	                            filename: '55.jpg'
						}, {
	                            title: 'Hector Cantat Musicam',
	                            filename: '56.jpg'
						}, {
	                            title: 'Colores Volant',
	                            filename: '57.jpg'
						}, {
	                            title: 'Sedemus',
	                            filename: '1.jpg'
						}, {
	                            title: 'Veteres Stamus',
	                            filename: '2.jpg'
						}, {
	                            title: 'Puellae Amicae',
	                            filename: '3.jpg'
						}, {
	                            title: 'Una Laeta, Una Miser',
	                            filename: '4.jpg'
						}, {
	                            title: 'Duo Laetae Cenam',
	                            filename: '5.jpg'
						}, {
	                            title: 'Ubi Concordia, Ibi Victoria (I)',
	                            filename: '6.jpg'
						}, {
	                            title: 'Ubi Concordia, Ibi Victoria (II)',
	                            filename: '7.jpg'
						}, {
	                            title: 'Sinistri',
	                            filename: '8.jpg'
						}, {
	                            title: 'Dextri',
	                            filename: '9.jpg'
						}, {
	                            title: 'Veteres et Magistrae',
	                            filename: '10.jpg'
						},

					]
	                },

	                {
	                    title: "Myth Pumpkins",
	                    description: "In our annual myth pumpkins event, students take some time to decorate pumpkins with mythological characters. We give out many awards, like Most Creative, Most Artistic, and more! Check out these awesome pumpkins.",
	                    thumbnail: "img/albums/mythpumpkins2015/1.JPG",
	                    filepath: "mythpumpkins2015",
	                    images: [
	                        {
	                            title: 'Legunt Arma',
	                            filename: '1.JPG'
						}, {
	                            title: 'Puella Facit Artem',
	                            filename: '2.JPG'
						}, {
	                            title: 'Puer Facit Artem',
	                            filename: '3.JPG'
						}, {
	                            title: 'Pueri Faciunt Artem',
	                            filename: '4.JPG'
						}, {
	                            title: 'Alteri Pueri Faciunt Artem',
	                            filename: '5.JPG'
						}, {
	                            title: 'Parvam Artem',
	                            filename: '6.JPG'
						}, {
	                            title: 'Laetae Puellae in Latina Prima',
	                            filename: '7.JPG'
						}, {
	                            title: 'Confusi Pueri',
	                            filename: '8.JPG'
						}, {
	                            title: 'Ars Confecta',
	                            filename: '9.JPG'
						}, {
	                            title: 'Medusa',
	                            filename: '10.JPG'
						}, {
	                            title: 'Laborant cum Amicis',
	                            filename: '11.JPG'
						}, {
	                            title: 'Pueri Diligentes',
	                            filename: '12.JPG'
						}, {
	                            title: 'Puella Diligentes',
	                            filename: '13.JPG'
						}, {
	                            title: 'Arma',
	                            filename: '14.JPG'
						}, {
	                            title: 'Ridens Ars',
	                            filename: '15.JPG'
						}, {
	                            title: 'Non Ridens Ars',
	                            filename: '16.JPG'
						}, {
	                            title: 'Multae Colores',
	                            filename: '17.JPG'
						}, {
	                            title: 'Narcissus',
	                            filename: '18.JPG'
						}, {
	                            title: 'Flava Ars',
	                            filename: '19.JPG'
						}, {
	                            title: 'Laeti Parvi Discupuli',
	                            filename: '20.jpg'
						}, {
	                            title: 'Non Diligens',
	                            filename: '21.jpg'
						}, {
	                            title: 'Tangit Armum',
	                            filename: '22.jpg'
						}, {
	                            title: 'Diligens Puella',
	                            filename: '23.jpg'
						}, {
	                            title: 'Confusa Puella Laborat',
	                            filename: '24.jpg'
						}, {
	                            title: 'Petit Bonum Armum',
	                            filename: '25.jpg'
						}, {
	                            title: 'Duo Faciunt Artes',
	                            filename: '26.jpg'
						}, {
	                            title: 'Duo Quoque Faciunt Artes',
	                            filename: '27.jpg'
						}, {
	                            title: 'Pingit',
	                            filename: '28.jpg'
						}, {
	                            title: 'Duo Iterum',
	                            filename: '29.jpg'
						}, {
	                            title: 'Non Idem Duo',
	                            filename: '30.jpg'
						}, {
	                            title: 'In Labore',
	                            filename: '31.jpg'
						}, {
	                            title: 'Diligens Petit Arma Bona',
	                            filename: '32.jpg'
						}, {
	                            title: 'Tandem Confecta Ars',
	                            filename: '33.jpg'
						}, {
	                            title: 'Arida',
	                            filename: '34.jpg'
						}, {
	                            title: 'Colligit Partes',
	                            filename: '35.jpg'
						}, {
	                            title: 'Caerulea Vestimenta',
	                            filename: '36.jpg'
						},

					]
	                },

	                {
	                    title: "Vergil's Birthday",
	                    description: "During Vergil's birthday, our AP Latin class likes to hold a special celebration that reenacts Vergil's naming ceremony! Someone is chosen to be the father, the mother, and (of course) Vergil himself. We also eat cake!",
	                    thumbnail: "img/albums/vergilsbirthday2015/1.jpg",
	                    filepath: "vergilsbirthday2015",
	                    images: [
	                        {
	                            title: 'Magistra Et Sacrificium ',
	                            filename: '1.jpg'
						}, {
	                            title: 'Furtim Spectat',
	                            filename: '2.jpg'
						}, {
	                            title: 'Infantulus et Parentes',
	                            filename: '3.jpg'
						}, {
	                            title: 'Subridentes',
	                            filename: '4.jpg'
						},
					]
	                },

	                {
	                    title: "Officer Dinner",
	                    description: "Every year, we hold an officers' dinner to celebrate our accomplishments throughout the year and say goodbye to our senior officers. This year, we had a fun gift exchange where each junior officer got a senior officer a present! It was really sweet, and we also had a wonderful meal at Italian Cafe. Can't wait for next year!",
	                    thumbnail: "img/albums/officerdinner2015/15.jpg",
	                    filepath: "officerdinner2015",
	                    images: [
	                        {
	                            title: 'Artifex et Censor',
	                            filename: '1.jpg'
						}, {
	                            title: 'Consul et Rex Certaminis',
	                            filename: '2.jpg'
						}, {
	                            title: 'Proconsul et Prorex Certaminis',
	                            filename: '3.jpg'
						}, {
	                            title: 'Optimus, Pulchrissimus Puer et Artifex',
	                            filename: '4.jpg'
						}, {
	                            title: 'Rex Certaminis et Auctor',
	                            filename: '5.jpg'
						}, {
	                            title: 'Rex Certaminis et Artifex',
	                            filename: '6.jpg'
						}, {
	                            title: 'Tribune et Praetor Maximus',
	                            filename: '7.jpg'
						}, {
	                            title: 'Proconsul, Consul, et Prorex Certaminis',
	                            filename: '9.jpg'
						}, {
	                            title: 'Solus Prorex Certaminis',
	                            filename: '10.jpg'
						}, {
	                            title: 'Consules Tecti',
	                            filename: '11.jpg'
						}, {
	                            title: 'Consules Tecti Redux',
	                            filename: '12.jpg'
						}, {
	                            title: 'Consules et Puer Saxi',
	                            filename: '13.jpg'
						}, {
	                            title: 'Optimae Magistrae',
	                            filename: '14.jpg'
						}, {
	                            title: 'Omnes Laeti Una',
	                            filename: '15.jpg'
						},

					]
	                },

	                {
	                    title: "Comissatio",
	                    thumbnail: "img/albums/comissatio2015/029.JPG",
	                    filepath: "comissatio2015",
	                    images: [
	                        {
	                            title: 'Quinque Pueri',
	                            filename: '029.JPG'
						}, {
	                            title: 'Volvens',
	                            filename: '035.JPG'
						}, {
	                            title: 'Volutus',
	                            filename: '038.JPG'
						}, {
	                            title: 'Imposuens',
	                            filename: '039.JPG'
						}, {
	                            title: 'Gaudens',
	                            filename: '040.JPG'
						}, {
	                            title: 'Fundens Vinum',
	                            filename: '043.JPG'
						}, {
	                            title: 'Tenuentes Uvas',
	                            filename: '045.JPG'
						}, {
	                            title: 'Tenuentes Poculos',
	                            filename: '046.JPG'
						}, {
	                            title: 'Tenuentes Uvas et Poculos',
	                            filename: '050.JPG'
						}, {
	                            title: 'Tenuentes Modo Uvas Iterum',
	                            filename: '053.JPG'
						},

					]
	                },

	                {
	                    title: "Lupercalia",
	                    description: "Lupercalia is one of our most energetic celebrations of the year! It always takes place around the time of Valentine's Day. We celebrate the classical origins of this modern holidy by recalling the Roman festival Lupercalia, which promoted fertility and freedom. We play a game at Lupercalia that involves a character playing a wolf who tries to break up couples! The last couple standing wins a prize.",
	                    thumbnail: "img/albums/lupercalia2015/1.JPG",
	                    filepath: "lupercalia2015",
	                    images: [
	                        {
	                            title: 'Semisomna Consul',
	                            filename: '1.JPG'
						}, {
	                            title: 'Una',
	                            filename: '2.JPG'
						}, {
	                            title: 'Laetus Lupus',
	                            filename: '3.JPG'
						}, {
	                            title: 'Duo Liberi',
	                            filename: '4.JPG'
						}, {
	                            title: 'Meditamur',
	                            filename: '6.JPG'
						}, {
	                            title: 'Verberate Puerum!',
	                            filename: '7.JPG'
						}, {
	                            title: 'Verberate Puellam!',
	                            filename: '8.JPG'
						}, {
	                            title: 'Infelix Iugum',
	                            filename: '9.JPG'
						}, {
	                            title: 'Ex Vagina',
	                            filename: '10.JPG'
						}, {
	                            title: 'In Vagina',
	                            filename: '11.JPG'
						}, {
	                            title: 'Optimi Amici',
	                            filename: '12.JPG'
						}, {
	                            title: 'Impetus',
	                            filename: '13.JPG'
						}, {
	                            title: 'Venatio',
	                            filename: '14.JPG'
						}, {
	                            title: 'Trado Codam',
	                            filename: '15.JPG'
						}, {
	                            title: 'Caedit Aliquem',
	                            filename: '16.JPG'
						},

					]
	                },

	                {
	                    title: "Ides of March",
	                    description: "Beware the Ides of March! Every March 15, we commemorate the date of Julius Caesar's death by marching around the school wearing our Latin t-shirts and chanting 'Beware the Ides of March!' Everyone not in Latin gets a little confused, but we love it. We finish our march with a reenactment of Caesar's murder from the famous Shakespeare play. When it's over, we throw Twizzlers through the air to represent the bloodshed, and everyone has fun!",
	                    thumbnail: "img/albums/idesofmarch2015/1.JPG",
	                    filepath: "idesofmarch2015",
	                    images: [
	                        {
	                            title: 'Primi Observantes',
	                            filename: '1.JPG'
						}, {
	                            title: 'Secundi Observantes',
	                            filename: '2.JPG'
						}, {
	                            title: 'Illustres',
	                            filename: '3.JPG'
						}, {
	                            title: 'Genuflectens Senator',
	                            filename: '4.JPG'
						}, {
	                            title: 'Caesar et Populus',
	                            filename: '5.JPG'
						}, {
	                            title: 'Caesar Dat Orationem',
	                            filename: '6.JPG'
						}, {
	                            title: 'Sola Senator',
	                            filename: '7.JPG'
						}, {
	                            title: 'Brutus Caedens Caesarem',
	                            filename: '8.JPG'
						}, {
	                            title: 'Caesar Est Mortuus',
	                            filename: '9.JPG'
						}, {
	                            title: 'Iacens in Humo',
	                            filename: '10.JPG'
						}, {
	                            title: 'Tristis',
	                            filename: '11.JPG'
						}, {
	                            title: 'Vescens',
	                            filename: '12.JPG'
						}, {
	                            title: 'Brutus Explicat',
	                            filename: '13.JPG'
						}, {
	                            title: 'Marcus Antonius',
	                            filename: '14.JPG'
						}, {
	                            title: 'Tecta Holoserico',
	                            filename: '15.JPG'
						}, {
	                            title: 'Duo Laeti Senatores',
	                            filename: '16.JPG'
						}, {
	                            title: 'Irati et Turbidi',
	                            filename: '17.JPG'
						}, {
	                            title: 'Atrae Puellae',
	                            filename: '18.JPG'
						}, {
	                            title: 'Antonius Extendit Vocem',
	                            filename: '19.JPG'
						}, {
	                            title: 'Antonius Extendit Vocem Adhuc',
	                            filename: '20.JPG'
						}, {
	                            title: 'Cur Ridetis, Liberi?',
	                            filename: '21.JPG'
						}, {
	                            title: 'Semivivi Duo',
	                            filename: '22.JPG'
						},

					]
	                },

	                {
	                    title: "Rome's Birthday",
	                    description: "We celebrate April 21, Rome's birthday, in a variety of ways! First, we have a she-wolf pinata filled with candy to represent the founding story of Rome. We then do a 'boulder throw' that is reminiscent of Turnus's boulder-throwing competition with Aeneas. Finally, we have a hurdle competition where students must jump over the 'walls' of Rome, which get loftier and loftier with each pass!",
	                    thumbnail: "img/albums/romesbirthday2015/1.jpg",
	                    filepath: "romesbirthday2015",
	                    images: [
	                        {
	                            title: 'Officiarii Subrident Cum Placenta',
	                            filename: '1.jpg'
						}, {
	                            title: 'Nitentes Consules',
	                            filename: '2.jpg'
						}, {
	                            title: 'Fortis Vir Iacit Saxum',
	                            filename: '3.JPG'
						}, {
	                            title: 'Sabinus Deficit Frangere Crependium',
	                            filename: '4.JPG'
						}, {
	                            title: 'Aeneas, Ascanius, Anchises',
	                            filename: '5.JPG'
						}, {
	                            title: 'Roma Offa Diem Natalem',
	                            filename: '6.jpg'
						}, {
	                            title: 'Laeta Turba',
	                            filename: '7.jpg'
						}, {
	                            title: 'Saxum Volitavit',
	                            filename: '8.jpg'
						}, {
	                            title: 'Turba Miratur',
	                            filename: '9.jpg'
						}, {
	                            title: 'Tendit Parare',
	                            filename: '10.jpg'
						}, {
	                            title: 'Fortissime Ambulat',
	                            filename: '11.jpg'
						}, {
	                            title: 'Conjectus (I)',
	                            filename: '12.jpg'
						}, {
	                            title: 'Conjectus (II)',
	                            filename: '13.jpg'
						}, {
	                            title: 'Conjectus (III)',
	                            filename: '14.jpg'
						}, {
	                            title: 'Conjectus (IV)',
	                            filename: '15.jpg'
						}, {
	                            title: 'Conjectus (V)',
	                            filename: '16.jpg'
						}, {
	                            title: 'Conjectus (VI)',
	                            filename: '17.jpg'
						}, {
	                            title: 'Conjectus (VII)',
	                            filename: '18.jpg'
						}, {
	                            title: 'Conjectus (VIII)',
	                            filename: '19.jpg'
						}, {
	                            title: 'Alma Optima Magistra Mater Sub Amictu',
	                            filename: '20.jpg'
						}, {
	                            title: 'Consul Subridet Me :(',
	                            filename: '21.jpg'
						}, {
	                            title: 'Saxum Tectit Corpus',
	                            filename: '22.jpg'
						}, {
	                            title: 'Saxum Tectit Corpus Adhuc',
	                            filename: '23.jpg'
						}, {
	                            title: 'Salit ad Astra!',
	                            filename: '24.jpg'
						}, {
	                            title: 'Utra Magistra Sub Amictu',
	                            filename: '25.jpg'
						}, {
	                            title: 'Liberi Spectant',
	                            filename: '26.jpg'
						}, {
	                            title: 'Defectus (I)',
	                            filename: '27.jpg'
						}, {
	                            title: 'Defectus (II)',
	                            filename: '28.jpg'
						}, {
	                            title: 'Defectus (III)',
	                            filename: '29.jpg'
						}, {
	                            title: 'Arripit Saxum',
	                            filename: '30.jpg'
						}, {
	                            title: 'Prospectat Forte',
	                            filename: '31.jpg'
						}, {
	                            title: 'Sperant Optimis',
	                            filename: '32.jpg'
						}, {
	                            title: 'In Complexu Proconsulis',
	                            filename: '33.jpg'
						}, {
	                            title: 'In Complexu Aliae Consulis',
	                            filename: '34.jpg'
						}, {
	                            title: 'In Complexu Alii Consulis',
	                            filename: '35.jpg'
						},

					]
	                }
				],
	            "2014": [
	                {
	                    title: "Ides of March",
	                    description: "Beware the Ides of March! Every March 15, we commemorate the date of Julius Caesar's death by marching around the school wearing our Latin t-shirts and chanting 'Beware the Ides of March!' Everyone not in Latin gets a little confused, but we love it. We finish our march with a reenactment of Caesar's murder from the famous Shakespeare play. When it's over, we throw Twizzlers through the air to represent the bloodshed, and everyone has fun!",
	                    thumbnail: "img/albums/idesofmarch2015/1.JPG",
	                    filepath: "idesofmarch2015",
	                    thumbnail: "img/albums/idesofmarch2014/1.jpg",
	                    filepath: "idesofmarch2014",
	                    images: [
	                        {
	                            title: 'Storming the Halls',
	                            filename: '1.jpg'
						}, {
	                            title: 'Veteres Gerentes Togas',
	                            filename: '2.jpg'
						}, {
	                            title: 'Fearless Leaders',
	                            filename: '3.jpg'
						}, {
	                            title: 'Ora Patent',
	                            filename: '4.jpg'
						}, {
	                            title: 'Lost Romans',
	                            filename: '5.jpg'
						}, {
	                            title: 'Oratio',
	                            filename: '6.jpg'
						}, {
	                            title: 'Caesar Waves',
	                            filename: '7.jpg'
						}, {
	                            title: 'Excited Underclassmen',
	                            filename: '8.jpg'
						}, {
	                            title: 'Looking Forward',
	                            filename: '9.jpg'
						}

					]
	                },

	                {
	                    title: "Vergil's Birthday",
	                    description: "During Vergil's birthday, our AP Latin class likes to hold a special celebration that reenacts Vergil's naming ceremony! Someone is chosen to be the father, the mother, and (of course) Vergil himself. We also eat cake!",
	                    thumbnail: "img/albums/vergilsbirthday2014/IMG_9638.JPG",
	                    filepath: "vergilsbirthday2014",
	                    images: [
	                        {
	                            title: 'Magistra Induens',
	                            filename: 'IMG_9567.JPG'
						}, {
	                            title: 'Infans Sugens Pollicem',
	                            filename: 'IMG_9573.JPG'
						}, {
	                            title: 'Magistra Sens Magistra',
	                            filename: 'IMG_9567.JPG'
						}, {
	                            title: 'Subridens Magistra Tenens Capram',
	                            filename: 'IMG_9580.JPG'
						}, {
	                            title: 'Observantes Pueri',
	                            filename: 'IMG_9589.JPG'
						}, {
	                            title: 'Secare Capram',
	                            filename: 'IMG_9596.JPG'
						}, {
	                            title: 'Tollit Capram Caelo',
	                            filename: 'IMG_9601.JPG'
						}, {
	                            title: 'Familia Movit Templum',
	                            filename: 'IMG_9607.JPG'
						}, {
	                            title: 'Subridete Picturae!',
	                            filename: 'IMG_9609.JPG'
						}, {
	                            title: 'Pater et Filius',
	                            filename: 'IMG_9618.JPG'
						}, {
	                            title: 'In Aquam',
	                            filename: 'IMG_9621.JPG'
						}, {
	                            title: 'Pater Dat Bullam',
	                            filename: 'IMG_9609.JPG'
						}, {
	                            title: 'Laeta Familia',
	                            filename: 'IMG_9629.JPG'
						}, {
	                            title: 'Vince Aut Mortuere',
	                            filename: 'IMG_9638.JPG'
						},

					]
	                },

	                {
	                    title: "Myth Pumpkins",
	                    description: "In our annual myth pumpkins event, students take some time to decorate pumpkins with mythological characters. We give out many awards, like Most Creative, Most Artistic, and more! Check out these awesome pumpkins.",
	                    thumbnail: "img/albums/mythpumpkins2014/IMG_9714.JPG",
	                    filepath: "mythpumpkins2014",
	                    images: [
	                        {
	                            title: 'Labore Una',
	                            filename: 'IMG_9714.JPG'
						}, {
	                            title: 'Pingentes Attentissime',
	                            filename: 'IMG_9718.JPG'
						}, {
	                            title: 'Solus Lupus',
	                            filename: 'IMG_9719.JPG'
						}, {
	                            title: 'Suspecta Puella',
	                            filename: 'IMG_9720.JPG'
						}, {
	                            title: 'Confusi Pueri',
	                            filename: 'IMG_9723.JPG'
						}, {
	                            title: 'Gaudium Solidarietatis',
	                            filename: 'IMG_9727.JPG'
						}, {
	                            title: 'Pax',
	                            filename: 'IMG_9729.JPG'
						}, {
	                            title: 'Euphoria',
	                            filename: 'IMG_9723.JPG'
						}, {
	                            title: 'Diligentes',
	                            filename: 'IMG_9741.JPG'
						}, {
	                            title: 'Principium Medusae',
	                            filename: 'IMG_9749.JPG'
						}, {
	                            title: 'Altera Medusa',
	                            filename: 'IMG_9752.JPG'
						}, {
	                            title: 'Conficit Aeolum',
	                            filename: 'IMG_9754.JPG'
						}, {
	                            title: 'Nitens Puer',
	                            filename: 'IMG_9755.JPG'
						}, {
	                            title: 'Medusa I',
	                            filename: 'IMG_9764.JPG'
						}, {
	                            title: 'Nitens Puer',
	                            filename: 'IMG_9755.JPG'
						}, {
	                            title: 'Aliquid',
	                            filename: 'IMG_9777.JPG'
						}, {
	                            title: 'In Zona',
	                            filename: 'IMG_9782.JPG'
						}, {
	                            title: 'Intensus',
	                            filename: 'IMG_9786.JPG'
						}, {
	                            title: 'Aliquid',
	                            filename: 'IMG_9788.JPG'
						}, {
	                            title: 'Magnus Aeolus',
	                            filename: 'IMG_9789.JPG'
						}, {
	                            title: 'Aliquid',
	                            filename: 'IMG_9790.JPG'
						}, {
	                            title: 'Balatro?',
	                            filename: 'IMG_9792.JPG'
						}, {
	                            title: 'Amici Latinae',
	                            filename: 'IMG_9796.JPG'
						}, {
	                            title: 'Formidilosa Medusa',
	                            filename: 'IMG_9798.JPG'
						}, {
	                            title: 'Vacerrosa Medusa',
	                            filename: 'IMG_9799.JPG'
						}, {
	                            title: 'Cyclops',
	                            filename: 'IMG_9801.JPG'
						}, {
	                            title: 'Pulcherrima Medusa',
	                            filename: 'IMG_9803.JPG'
						}, {
	                            title: 'Draco',
	                            filename: 'IMG_9804.JPG'
						}, {
	                            title: 'Aliquid',
	                            filename: 'IMG_9806.JPG'
						}
					]
	                },

	                {
	                    title: "Induction Ceremony",
	                    description: "TJ Latin's Induction Ceremony is a very secretive event. We dim the lights and make room for hundreds of students who are entering Latin Honor Society. Students who are in Latin 3 are eligible to join. Officers and magistrae lead the event, sharing tips for success in Latin, secret rituals, and, of course, cake.",
	                    thumbnail: "img/albums/induction2014/IMG_9412.JPG",
	                    filepath: "induction2014",
	                    images: [
	                        {
	                            title: 'Proconsul',
	                            filename: 'IMG_9403.JPG'
						},
	                        {
	                            title: 'Reges Certaminis',
	                            filename: 'IMG_9405.JPG'
						},
	                        {
	                            title: 'Tremenda Dea Optima',
	                            filename: 'IMG_9412.JPG'
						},
	                        {
	                            title: 'Censor',
	                            filename: 'IMG_9415.JPG'
						},
	                        {
	                            title: 'Validus Vir',
	                            filename: 'IMG_9417.JPG'
						},
	                        {
	                            title: '(Vilis) Dominus Telae',
	                            filename: 'IMG_9419.JPG'
						},
	                        {
	                            title: 'Praetor Magnus',
	                            filename: 'IMG_9422.JPG'
						},
	                        {
	                            title: 'Praetor Maximus',
	                            filename: 'IMG_9425.JPG'
						},
	                        {
	                            title: 'Co-Consul',
	                            filename: 'IMG_9435.JPG'
						},
	                        {
	                            title: 'Induens Cappam',
	                            filename: 'IMG_9439.JPG'
						},
	                        {
	                            title: 'Ignire I',
	                            filename: 'IMG_9445.JPG'
						},
	                        {
	                            title: 'Ignire II',
	                            filename: 'IMG_9449.JPG'
						},
	                        {
	                            title: 'Ignire III',
	                            filename: 'IMG_9455.JPG'
						},
	                        {
	                            title: 'Ignire IV',
	                            filename: 'IMG_9462.JPG'
						},
	                        {
	                            title: 'Ignire V',
	                            filename: 'IMG_9470.JPG'
						},
	                        {
	                            title: 'Tollit Cultrem',
	                            filename: 'IMG_9480.JPG'
						},
	                        {
	                            title: 'Secat Malum',
	                            filename: 'IMG_9482.JPG'
						},
	                        {
	                            title: 'Monstrat Phantasmam',
	                            filename: 'IMG_9491.JPG'
						},
	                        {
	                            title: 'Obedientes Liberi',
	                            filename: 'IMG_9493.JPG'
						},
	                        {
	                            title: 'Legio',
	                            filename: 'IMG_9496.JPG'
						},
	                        {
	                            title: 'Olfacit Serta',
	                            filename: 'IMG_9498.JPG'
						},
	                        {
	                            title: 'Cloelia',
	                            filename: 'IMG_9513.JPG'
						},
	                        {
	                            title: 'Hector',
	                            filename: 'IMG_9515.JPG'
						},
	                        {
	                            title: 'Subridentes Propter LHS',
	                            filename: 'IMG_9520.JPG'
						},
	                        {
	                            title: 'Faciunt Flammas Simul',
	                            filename: 'IMG_9522.JPG'
						},
	                        {
	                            title: 'Bellaria!',
	                            filename: 'IMG_9527.JPG'
						},
	                        {
	                            title: 'Seniores Officiarii',
	                            filename: 'IMG_9537.JPG'
						},
	                        {
	                            title: 'Et Carpe Diem',
	                            filename: 'IMG_9547.JPG'
						},
	                        {
	                            title: 'Eugepae',
	                            filename: 'IMG_9549.JPG'
						},
	                        {
	                            title: 'Rumpe E Nocte',
	                            filename: 'IMG_9550.JPG'
						},
	                        {
	                            title: '#VolitansManus',
	                            filename: 'IMG_9551.JPG'
						},
	                        {
	                            title: '#ContigaManus',
	                            filename: 'IMG_9552.JPG'
						},
	                        {
	                            title: 'Artifices',
	                            filename: 'IMG_9555.JPG'
						},
	                        {
	                            title: 'Potestas Puellarum',
	                            filename: 'IMG_9557.JPG'
						},
	                        {
	                            title: 'Pellax Camptaules',
	                            filename: 'IMG_9559.JPG'
						}
					]
	                },

	                {
	                    title: "VJCL Convention",
	                    description: "TJ Latin takes hundreds of students to VJCL Convention every year. This year, it took place on November 23-24. We won second in spirit this year, and several of our members took home prestigious awards! Our members competed in academic tests, oratorical contests, and even artistic competitions at the Richmond Convention Center. It was a great time, and we can't wait to come back next year!",
	                    thumbnail: "img/albums/convention2014/AllOfUs.JPG",
	                    filepath: "convention2014",
	                    images: [
	                        {
	                            title: 'Omnes',
	                            filename: 'AllOfUs.JPG'
						},
	                        {
	                            title: 'Victor',
	                            filename: 'Award.JPG'
						},
	                        {
	                            title: 'Signa',
	                            filename: 'Banner.JPG'
						},
	                        {
	                            title: 'Pueri et Magistra',
	                            filename: 'Boys.JPG'
						},
	                        {
	                            title: 'Pubes',
	                            filename: 'Chaperone.JPG'
						},
	                        {
	                            title: 'Parvi Liberi',
	                            filename: 'Children.JPG'
						},
	                        {
	                            title: 'Syntheses',
	                            filename: 'CostumeContest.JPG'
						},
	                        {
	                            title: 'Dextrus',
	                            filename: 'Dextrus.JPG'
						},
	                        {
	                            title: 'Sinister',
	                            filename: 'Sinister.JPG'
						},
	                        {
	                            title: 'Clamant',
	                            filename: 'GoldenBoy.JPG'
						},
	                        {
	                            title: 'Turbus',
	                            filename: 'HallwayOfDeath.JPG'
						},
	                        {
	                            title: 'Adorandae Puellae Cum Armis',
	                            filename: 'Happygirls.JPG'
						},
	                        {
	                            title: 'Cor',
	                            filename: 'HeartShield.JPG'
						},
	                        {
	                            title: 'Fidens Scholaris',
	                            filename: 'ModelStatus.JPG'
						},
	                        {
	                            title: 'Sedentes Viri',
	                            filename: 'Mustachioed.JPG'
						},
	                        {
	                            title: 'Novi Cum Dea',
	                            filename: 'NoobsandConklin.JPG'
						},
	                        {
	                            title: 'Officiarii in Togis',
	                            filename: 'OfficersAtConvention.JPG'
						},
	                        {
	                            title: 'Faciunt Oratio',
	                            filename: 'Oratio.JPG'
						},
	                        {
	                            title: 'Concurrunt',
	                            filename: 'S_Shield.JPG'
						},
	                        {
	                            title: 'TJ',
	                            filename: 'TJShields.JPG'
						},
	                        {
	                            title: 'Mnemosyna Rei',
	                            filename: 'VarsityLatinShirts.JPG'
						},
	                        {
	                            title: 'SPQR',
	                            filename: 'WAAAAADE.JPG'
						},
	                        {
	                            title: 'Amicae',
	                            filename: 'YayChildren.JPG'
						}
					]
	                },

	                {
	                    title: "Saturnalia",
	                    description: "Don't call it Secret Santa! Every winter, we like to celebrate the famous Roman festival of Saturnalia by doing an in-class secret gift exchange. Each person also has to write a poem for their partner, and on the chosen day, we read aloud our poems, and the class has to guess who the lucky recipient is! Then, the recipient has to read their poem, and so on. It's so fun, and a great event to do before winter break!",
	                    thumbnail: "img/albums/saturnalia2014/DanielMichael.JPG",
	                    filepath: "saturnalia2014",
	                    images: [
	                        {
	                            title: 'Daniel et Michael',
	                            filename: 'DanielMichael.JPG'
						},
	                        {
	                            title: 'Edith et Krishna',
	                            filename: 'EdithSomeone.JPG'
						},
	                        {
	                            title: 'Ray et Anna',
	                            filename: 'RayAnna.JPG'
						},
	                        {
	                            title: 'Samuel et Anna',
	                            filename: 'SamAnna.JPG'
						},
	                        {
	                            title: 'Sandy et Ray',
	                            filename: 'SandyRay.JPG'
						}
					]
	                }
				],
	        };

	        $scope.switch = function () {
	            $scope.browsingAlbums = !$scope.browsingAlbums;
	        };

	        $scope.setCurrentAlbum = function (album) {
	            $scope.currentAlbum = album;
	        }
	    })
	    .config(function ($urlRouterProvider, $stateProvider) {
	        $urlRouterProvider.otherwise('/home');

	        $stateProvider
	            .state('home', {
	                url: '/home',
	                templateUrl: 'views/home.html',
	                controller: 'CarouselCtrl'
	            })
	            .state('about', {
	                url: '/about',
	                templateUrl: 'views/about.html',
	                controller: 'AboutCtrl'
	            })
	            .state('scribe', {
	                url: '/scribe',
	                templateUrl: 'views/scribe.html',
	                controller: 'ScribeCtrl'
	            })
	            .state('image', {
	                url: '/image',
	                templateUrl: 'views/image.html',
	                controller: 'ImageCtrl'
	            })
	            .state('calendar', {
	                url: '/calendar',
	                templateUrl: 'views/calendar.html',
	                controller: 'CalendarCtrl'
	            })
	            .state('convention', {
	                url: '/convention',
	                templateUrl: 'views/convention.html',
	            })
	            .state('forum', {
	                url: '/forum',
	                templateUrl: 'views/forum.html',
	            })
	            .state('studyguides', {
	                url: '/studyguides',
	                templateUrl: 'views/studyguides.html',
	                controller: 'AccordionCtrl'
	            })
	            .state('interactivequizzes', {
	                url: '/interactivequizzes',
	                templateUrl: 'views/interactivequizzes.html',
	                controller: 'QuizCtrl'
	            })
	            .state('conventiontests', {
	                url: '/conventiontests',
	                templateUrl: 'views/conventiontests.html',
	            })
	            .state('2013awards', {
	                url: '/2013awards',
	                templateUrl: 'views/2013awards.html',
	            })
	            .state('2014awards', {
	                url: '/2014awards',
	                templateUrl: 'views/2014awards.html',
	            })
	            .state('2015awards', {
	                url: '/2015awards',
	                templateUrl: 'views/2015awards.html',
	            })
	            .state('sitemap', {
	                url: '/sitemap',
	                templateUrl: 'views/sitemap.html',
	            })
	            .state('blog', {
	                url: '/blog',
	                templateUrl: 'views/blog.html',
	                controller: 'BlogCtrl'
	            })
	            .state('links', {
	                url: '/links',
	                templateUrl: 'views/links.html',
	            })
	    })