import './jQuery.js';
// import cookie from './cookie';
(function(){
    let id = location.search.split('=')[1];
    $.ajax({
        type:"get",
        url:"http://localhost:8888/product/getItem",
        data:{id:id},
        dataType:"json",
        success:function(res){
            console.log(res);
            res = res[0];
            let picture = JSON.parse(res.picture);
            let template = `<div class="product clearfix">
            <div class="proimg left">
            <img src="../${picture[0].src}" alt="">
        </div>
        <div class="info left">
            <div class="title">
                <h1>${res.name}</h1>
                <h2>是下一代手机 更是下一代电脑</h2>
            </div>
            <div class="actives clearfix">
                <span>促销活动</span>
                <ul>
                <li><a href="">下载 App 领新人大礼包，首单优惠购最低只要 ¥ 9.9 </a></li>
                <li><a href="">花呗 6期免息 每月低至 ￥ 799.83 元</a></li>
                <li><a href="">花呗 3期免息 每月低至 ￥ 1599.67 元</a></li>
                </ul>
            </div>
            <div class="colorchose clearfix">
                <span>颜色选择</span>
                <ul>
                    <li>
                        <a href="">浅黑色</a>
                    </li>
                    <li>
                        <a href="">松绿色</a>
                    </li>
                    <li>
                        <a href="">纯白色光阴特别版</a>
                    </li>
                </ul>
            </div>
            <div class="rom clearfix">
                <span>容量选择</span>
                <ul>
                    <li>
                        <a href="">8G + 128GB</a>
                    </li>
                    <li>
                        <a href="">8G + 256GB</a>
                    </li>
                    <li>
                        <a href="">12G + 256GB</a>
                    </li>
                    <li>
                        <a href="">16G + 512GB</a>
                    </li>
                </ul>
            </div>
            <div class="instrct clearfix">
                <span>服务说明</span>
                <ul>
                    <li><em>* 满 99 元包邮</em></li>
                    <li><em>* 支付成功后7天内发货，如遇不可抗力因素将会顺延。</em></li>
                </ul>
            </div>
            <div class="baoxiu">
                <span>* 保修服务</span>
                <p>在您购买“坚果手机意外碎屏保修服务”后的有效期内，在非蓄意破坏的前提下，由于意外坠落、意外挤压或意外碰撞导致手机屏幕碎裂的，可以免费更换一次原装屏幕组件。您可在手机初次联网激活时或收货起 （以在先时间为准）3 日内访问 网站购买，或在本机 设置 > 关于本机 > 保修服务 中购买服务。服务细则参见。<a href="#">《坚果意外碎屏保险服务》</a> 如您购买延长保修服务，在产品正常“三包”期结束后，将额外获得 1 年保修服务。服务细则参见 <a href="#">《坚果手机延长服务保险》</a></p>
            </div>
            </div>
            </div>`;
            $('.cnm').append(template);
        }
    });

    
})();