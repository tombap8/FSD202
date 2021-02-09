<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>echo를 활용한 변수출력!</title>
    <link rel="stylesheet" href="https://ssl.pstatic.net/static.news/pnews/resources/20210202_190306/css/common.css">
</head>

<body>
    <?php 
    // 변수에 값을 셋팅한 수 각 영역에 넣어준다!
    
    $tit = "헤드라인 뉴스";
    $news1 = '정의용 "한반도 비핵화는 한미 공동목표…조율 문제 없을 것"(종합)';
    $news2 = "'일론 머스크' 한 마디에...비트코인 5천만원 돌파도 눈앞";
    
    /*
    위의 데이터를 DB에서 가져와 셋팅했다고 가정하자!
    출력위치에 아래와 같이 코딩해 준다
    <?echo 변수?>를 아래와 같이 쉽게 쓴다!
    <?= 변수?>
    */


    ?>





    <div class="main_component droppable" id="today_main_news" style="width:727px">
        <div class="com_header">
            <h4 class="tit_h4 tit_main1">
                <!--1.제목출력-->
                <strong><?=$tit?></strong>
            </h4>
            <!--2.안내문구 중 일부출력-->
            <p class="news_info_txt"><?=$tit?>와 각 기사묶음 타이틀은 기사 내용을 기반으로 <strong>자동 추출</strong>됩니다.</p>
        </div>
        <!-- [D] 구형: .com_list.com_list_headline, 이시각주요뉴스:.newsnow, 헤드라인뉴스:.hdline_news -->
        <div class="hdline_news">
            <div class="hdline_flick">
                <div class="hdline_flick_item" style="display:block">
                    <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=102&amp;oid=001&amp;aid=0012194087" class="lnk_hdline_main_article nclicks('mai.image', '880000D8_000000000000000012194087', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                        <img src="https://imgnews.pstatic.net/image/001/2021/02/09/AKR20210209100700061_01_i_P4_20210209140848234.jpg?type=nf300_190" width="300" height="190" alt="'정인이 사건' 넉 달 만에 또…이모 모진 학대로 열살 여아 숨져" onerror="javascript:this.src='https://ssl.pstatic.net/static.news/image/news/2009/noimage_300x190.png';">
                        <div class="hdline_flick_mask">
                            <p class="hdline_flick_tit">'정인이 사건' 넉 달 만에 또…이모 모진 학대로…</p>
                        </div>
                    </a>

                    <a href="/main/clusterArticles.nhn?id=c_202102081520_00000006&amp;mode=LSD&amp;mid=shm&amp;oid=001&amp;aid=0012194087" class="lnk_hdline_cluster_more nclicks('mai.clu', '880000D8_000000000000000012194087', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                        <span class="blind">관련기사 개수</span>
                        <span class="cluster_more_icon_num">86</span>
                    </a>

                </div>

                <div class="hdline_flick_item" style="display:none">
                    <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=437&amp;aid=0000258697" class="lnk_hdline_main_article nclicks('mai.image', '08138260_000000000000000000258697', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                        <img src="https://imgnews.pstatic.net/image/437/2021/02/09/0000258697_001_20210209144711795.jpg?type=nf300_190" width="300" height="190" alt="황희 " 생활비="" 60만원,="" 잘못="" 전달된="" 것…실제="" 300만원="" 정도""="" onerror="javascript:this.src='https://ssl.pstatic.net/static.news/image/news/2009/noimage_300x190.png';">
                        <div class="hdline_flick_mask">
                            <p class="hdline_flick_tit">황희 "생활비 60만원, 잘못 전달된 것…실제 300…</p>
                        </div>
                    </a>

                    <a href="/main/clusterArticles.nhn?id=c_202102091110_00000008&amp;mode=LSD&amp;mid=shm&amp;oid=437&amp;aid=0000258697" class="lnk_hdline_cluster_more nclicks('mai.clu', '08138260_000000000000000000258697', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                        <span class="blind">관련기사 개수</span>
                        <span class="cluster_more_icon_num">56</span>
                    </a>

                </div>

                <div class="hdline_flick_navi">
                    <button type="button" class="flick_btn_prev nclicks(mai.prev)" disabled="disabled" onclick="prevRecommend(); "><span class="blind">이전기사</span></button><button type="button" class="flick_btn_next nclicks(mai.next)" onclick="nextRecommend(); "><span class="blind">다음기사</span></button>
                </div>
                <!--[D] 버튼 비활성: disabled 속성 추가 -->
            </div>

            <ul class="hdline_article_list">


                <li>
                    <div class="hdline_article_tit">
                        <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=001&amp;aid=0012194235" class="lnk_hdline_article nclicks('mai.text1', '880000D8_000000000000000012194235', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <!--3.뉴스1출력-->
                            <?= $news1 ?>
                        </a>
                    </div>
                    <div class="hdline_cluster_more">
                        <a href="/main/clusterArticles.nhn?id=c_202102091010_00000008&amp;mode=LSD&amp;mid=shm&amp;oid=001&amp;aid=0012194235" class="lnk_hdline_cluster_more nclicks('mai.clu', '880000D8_000000000000000012194235', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <span class="blind">관련기사 개수</span>
                            <span class="cluster_more_icon_num">28</span>
                        </a>
                    </div>
                </li>




                <li>
                    <div class="hdline_article_tit">
                        <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=101&amp;oid=469&amp;aid=0000579113" class="lnk_hdline_article nclicks('mai.text1', '88156f75_000000000000000000579113', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <!--4.뉴스2출력-->
                            <?= $news2 ?>
                        </a>
                    </div>
                    <div class="hdline_cluster_more">
                        <a href="/main/clusterArticles.nhn?id=c_202102080810_00000035&amp;mode=LSD&amp;mid=shm&amp;oid=469&amp;aid=0000579113" class="lnk_hdline_cluster_more nclicks('mai.clu', '88156f75_000000000000000000579113', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <span class="blind">관련기사 개수</span>
                            <span class="cluster_more_icon_num">84</span>
                        </a>
                    </div>
                </li>




                <li>
                    <div class="hdline_article_tit">
                        <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=025&amp;aid=0003076513" class="lnk_hdline_article nclicks('mai.text1', '880000F2_000000000000000003076513', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            열린민주 서울 후보 김진애 확정…김의겸 돌아오나
                        </a>
                    </div>
                    <div class="hdline_cluster_more">
                        <a href="/main/clusterArticles.nhn?id=c_202102091030_00000034&amp;mode=LSD&amp;mid=shm&amp;oid=025&amp;aid=0003076513" class="lnk_hdline_cluster_more nclicks('mai.clu', '880000F2_000000000000000003076513', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <span class="blind">관련기사 개수</span>
                            <span class="cluster_more_icon_num">38</span>
                        </a>
                    </div>
                </li>




                <li>
                    <div class="hdline_article_tit">
                        <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=102&amp;oid=011&amp;aid=0003869465" class="lnk_hdline_article nclicks('mai.text1', '88000108_000000000000000003869465', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            대낮에 주행 차량 가로막고 둔기로 '묻지마 폭행' 일당에 네티즌 공분
                        </a>
                    </div>
                    <div class="hdline_cluster_more">
                        <a href="/main/clusterArticles.nhn?id=c_202102091130_00000004&amp;mode=LSD&amp;mid=shm&amp;oid=011&amp;aid=0003869465" class="lnk_hdline_cluster_more nclicks('mai.clu', '88000108_000000000000000003869465', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <span class="blind">관련기사 개수</span>
                            <span class="cluster_more_icon_num">18</span>
                        </a>
                    </div>
                </li>




                <li>
                    <div class="hdline_article_tit">
                        <a href="/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=102&amp;oid=421&amp;aid=0005157780" class="lnk_hdline_article nclicks('mai.text1', '08138263_000000000000000005157780', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            "윤석열 '판사사찰 직권남용’ 혐의 없다"…서울고검 결론(종합)
                        </a>
                    </div>
                    <div class="hdline_cluster_more">
                        <a href="/main/clusterArticles.nhn?id=c_202102091110_00000002&amp;mode=LSD&amp;mid=shm&amp;oid=421&amp;aid=0005157780" class="lnk_hdline_cluster_more nclicks('mai.clu', '08138263_000000000000000005157780', 'airsGParam', '0', 'news_qm_v2.0', 'N0fOBA71P0KDNyEj')">
                            <span class="blind">관련기사 개수</span>
                            <span class="cluster_more_icon_num">49</span>
                        </a>
                    </div>
                </li>



            </ul>
        </div>

        <div class="btn_move">
            <!-- [D] .down_off 또는 .up_off 추가시 '<span class="blind">불가능</span>' 추가 -->
            <span class="move" title="이동">이동</span> <a href="#SLELq" class="nclicks(mai.up) up_off" title="위로">위로<span class="blind">불가능</span></a> <a href="#SLELq" class="nclicks(mai.down) down" title="아래로">아래로</a>
        </div>
    </div>
</body>

</html>
