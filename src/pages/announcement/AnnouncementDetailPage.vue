<template>
  <div>
    <nav-bar />

    <div class="main">
      <page-header
        title=""
        subtitle=""
      />
      <breadcrumb :crumbs="crumbs" />

      <div class="module ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="sidebar-left pr-4">
                <!-- Recent entries widget-->
                <aside class="widget widget-recent-entries-custom">
                  <div class="widget-title">
                    <h6>Pengumuman Terbaru</h6>
                  </div>
                  <ul>
                    <li class="clearfix">
                      <div class="wi">
                        <a href="#">
                          <img
                            src="../../assets/img/blog/1.jpg"
                            alt="recent post"
                            class="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div class="wb">
                        <a href="#">
                          Map where your photos were taken and discover local
                          points.
                        </a>
                        <span class="post-date">May 8, 2016</span>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="wi">
                        <a href="#">
                          <img
                            src="../../assets/img/blog/2.jpg"
                            alt="recent post"
                            class="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div class="wb">
                        <a href="#">
                          Map where your photos were taken and discover local
                          points.
                        </a>
                        <span class="post-date">May 8, 2016</span>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="wi">
                        <a href="#">
                          <img
                            src="../../assets/img/blog/3.jpg"
                            alt="recent post"
                            class="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div class="wb">
                        <a href="#">
                          Map where your photos were taken and discover local
                          points.
                        </a>
                        <span class="post-date">May 8, 2016</span>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
            <div class="col-lg-8 col-md-8">
              <!-- Post-->
              <article class="post">
                <div class="post-preview">
                  <img
                    src="../../assets/img/blog/1-w.jpg"
                    alt="article"
                    class="img-fluid"
                  />
                </div>
                <div class="post-wrapper">
                  <div class="post-header">
                    <h1 class="post-title">Minimalist Chandelier</h1>
                    <ul class="post-meta">
                      <li>November 18, 2016</li>
                      <li>
                        In
                        <a href="#">Branding</a>
                        ,
                        <a href="#">Design</a>
                      </li>
                      <li><a href="#">3 Comments</a></li>
                    </ul>
                  </div>
                  <div class="post-content">
                    <p>
                      Meh synth Schlitz, tempor duis single-origin coffee ea
                      next level ethnic fingerstache fanny pack nostrud. Seitan
                      High Life reprehenderit consectetur cupidatat kogi about
                      me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                      Helvetica. Salvia esse nihil, flexitarian Truffaut synth
                      art party deep v chillwave. Seitan High Life reprehenderit
                      consectetur cupidatat kogi.
                    </p>
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, elit
                      small batch freegan sed. Craft beer elit seitan
                      exercitation, photo booth et 8-bit kale chips proident
                      chillwave deep v laborum. Aliquip veniam delectus, Marfa
                      eiusmod Pinterest in do umami readymade swag. Selfies
                      iPhone Kickstarter, drinking vinegar jean shorts fixie
                      consequat flexitarian four loko.
                    </p>
                    <blockquote class="blockquote">
                      <p>
                        To be yourself in a world that is constantly trying to
                        make you something else is the greatest accomplishment.
                      </p>
                      <footer class="blockquote-footer">
                        Amanda Pollock, Google Inc.
                      </footer>
                    </blockquote>
                    <p>
                      Meh synth Schlitz, tempor duis single-origin coffee ea
                      next level ethnic fingerstache fanny pack nostrud. Seitan
                      High Life reprehenderit consectetur cupidatat kogi about
                      me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                      Helvetica.
                    </p>
                    <p>
                      Meh synth Schlitz, tempor duis single-origin coffee ea
                      next level ethnic fingerstache fanny pack nostrud. Seitan
                      High Life reprehenderit consectetur cupidatat kogi about
                      me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                      Helvetica. Salvia esse nihil, flexitarian Truffaut synth
                      art party deep v chillwave. Seitan High Life reprehenderit
                      consectetur cupidatat kogi.
                    </p>
                    <ol>
                      <li>Digital Strategy</li>
                      <li>Software Development</li>
                      <li>Interaction Design</li>
                    </ol>
                    <p>
                      Meh synth Schlitz, tempor duis single-origin coffee ea
                      next level ethnic fingerstache fanny pack nostrud. Seitan
                      High Life reprehenderit consectetur cupidatat kogi about
                      me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                      Helvetica.
                    </p>
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, elit
                      small batch freegan sed. Craft beer elit seitan
                      exercitation, photo booth et 8-bit kale chips proident
                      chillwave deep v laborum. Aliquip veniam delectus, Marfa
                      eiusmod Pinterest in do umami readymade swag. Selfies
                      iPhone Kickstarter, drinking vinegar jean shorts fixie
                      consequat flexitarian four loko.
                    </p>
                  </div>
                </div>
              </article>
              <!-- Post end-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <site-footer />
    <copyright />
  </div>
</template>
<script>
import NavBar from '../../views/commons/NavBar'
import PageHeader from '../../views/commons/PageHeader'
import SiteFooter from '../../views/commons/SiteFooter'
import Copyright from '../../views/commons/Copyright'
import Breadcrumb from '../../views/commons/Breadcrumb'

export default {
  name: 'AnnouncementDetailPage',
  components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright },
  data: function () {
    return {
      crumbs: [
        { link: '/', name: 'Home', isActive: false },
        { link: '/announcement', name: 'Pengumuman', isActive: false },
        { link: '#', name: 'Blog Details left sidebar', isActive: true }
      ]
    }
  }
}
</script>
