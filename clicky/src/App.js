import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";


class App extends React.Component {
    render () {
       return (
            <div>
                <Header />
                <div className="cards">
                    <Card image="http://cdn.skim.gs/image/upload/v1456343408/msi/pet-names-inspired-by-80s-sitcoms-threes-company_puqf11.jpg" title="Three's Company" />
                    <Card image="https://images2.houstonpress.com/imager/u/original/6381505/nbc_sitcoms.jpg" title="Facts of Life" />
                    <Card image="https://i.ytimg.com/vi/92T1UdbkxHY/hqdefault.jpg" title="The Jeffersons" />
                    <Card image="https://s3.amazonaws.com/pq-imgs/images/quizzes/growing-pains.jpg-3140.jpg" title="Growing Pains" />
                    <Card image="https://3.bp.blogspot.com/-pwT3BbAH5l4/VwlnTPOIuZI/AAAAAAAAGBk/PZs0jVAOdcAy6HDS5jyE22RbaavVloMvA/s1600/slideshow-best-black-sitcoms-cover.jpg" title="A Different World" />
                    <Card image="https://i.kinja-img.com/gawker-media/image/upload/s--giF0CsIb--/c_scale,fl_progressive,q_80,w_800/qubunfj0e74daeacelfi.jpg" title="Cheers" />
                    <Card image="http://www.mamamaryshow.com/wp-content/uploads/2010/11/FamilyTies.png" title="Family Ties" />
                    <Card image="http://img.playbuzz.com/image/upload/f_auto,fl_lossy,q_auto/cdn/a4cb18ae-b5df-4452-87a3-0100d7b4114c/ee24ecd0-18c5-43fb-80fe-23bfa0133ce7.jpg" title="Blossom" />
                    <Card image="http://images.fanpop.com/images/image_uploads/Seinfeld-seinfeld-395644_360_306.jpg" title="Seinfeld" />
                    <Card image="http://s2.r29static.com//bin/entry/e72/410x492,80/1661796/image.jpg" title="The Fresh Prince of Bel Air" />
                    <Card image="https://ic.pics.livejournal.com/liewitnessnews/59331440/25760/25760_900.jpg" title="Living Single" />
                    <Card image="https://meganfon397ss.files.wordpress.com/2008/11/friends2.jpg" title="Friends" />

                </div>
            </div>
       )
    }
}


export default App;
