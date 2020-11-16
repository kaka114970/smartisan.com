import './jQuery.js';
//二级导航下拉
import './jquery.lazyload.min.js';
const baseUrl = 'http://localhost:8888';

$("img.lazy").lazyload({effect: "fadeIn"}),

(function(){ 
    $.ajax({ 
        type:"get",
        url:`${baseUrl}/product/getProducts `,
        dataType:"json",
        success:function(res){
            // console.log(res);
            let tempLi = '';
            res.forEach((elm,i)=> {
                // console.log(elm);

                let picture = JSON.parse(elm.picture);
                console.log(elm);
                // console.log(picture);
                tempLi+=`
                    <li><a href="../html/details1.html?id=${elm.id}">
                            <img src="${picture[0].src}">
                            <h3>${elm.name}</h3>
                            <h5>是下一代手机，更是下一代电脑</h5>
                            <span>￥${elm.price}</span>
                        </a></li>`;
            });
            $('.goods').append(tempLi);
            $(
                $('.ind').on('mouseover', () => {
                    $('.subnav1').css({ 'height': '277px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav1').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.jgs').on('mouseover', () => {
                    $('.subnav2').css({ 'height': '277px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav2').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.tnt').on('mouseover', () => {
                    $('.subnav3').css({ 'height': '277px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav3').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.gf').on('mouseover', () => {
                    $('.subnav4').css({ 'height': '277px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav4').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.fs').on('mouseover', () => {
                    $('.subnav5').css({ 'height': '277px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav5').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.dy').on('mouseover', () => {
                    $('.subnav6').css({ 'height': '277px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav6').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.3c').on('mouseover', () => {
                    $('.subnav7').css({ 'height': '305px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav7').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.jj').on('mouseover', () => {
                    $('.subnav8').css({ 'height': '305px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav8').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.jy').on('mouseover', () => {
                    $('.subnav9').css({ 'height': '305px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav9').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.mz').on('mouseover', () => {
                    $('.subnav10').css({ 'height': '305px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav10').css({ 'height': '0px', 'opacity': '0' })
                }),
                $('.fw').on('mouseover', () => {
                    $('.subnav11').css({ 'height': '170px', 'opacity': '1' })
                }
                ).on('mouseleave', () => {
                    $('.subnav11').css({ 'height': '0px', 'opacity': '0' })
                })
            )
        }
    });
})();
