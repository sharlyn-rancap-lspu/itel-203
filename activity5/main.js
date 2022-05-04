
                    var nav = document.querySelector('nav');

                      window.addEventListener('scroll', function () {
                        if (window.pageYOffset > 100) {
                          nav.classList.add('bg-light', 'shadow');
                        } else {
                          nav.classList.remove('bg-light' , 'shadow');
                        }
                        
                    var textWrapper = document.querySelector('.text2 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.text2 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1200,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.text2 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                    
                    var textWrapper = document.querySelector('.text3 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.text3 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1200,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.text3 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                   
                    var textWrapper = document.querySelector('.text4 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.text4 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1200,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.text4 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                          
                          var textWrapper = document.querySelector('.text5 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.text5 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1200,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.text5 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                          
                             var textWrapper = document.querySelector('.text6 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.text6 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1000,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.text6 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                       
                       var textWrapper = document.querySelector('.text7 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.text7 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1000,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.text7 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                          var textWrapper = document.querySelector('.para6 ');
                    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                     anime.timeline({loop: true})
                          .add({
                            targets: '.para6 .letter',
                            translateX: [40,0],
                            translateZ: 0,
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1000,
                            delay: (el, i) => 500 + 30 * i
                          }).add({
                            targets: '.para6 .letter',
                            translateX: [0,-30],
                            opacity: [1,0],
                            easing: "easeInExpo",
                            duration: 1100,
                            delay: (el, i) => 100 + 30 * i
                          });
                      });
