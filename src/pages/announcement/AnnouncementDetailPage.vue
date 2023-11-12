<template>
  <div>
    <nav-bar />

    <div class="main">
      <page-header title="Pengumuman" subtitle="" />
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
                    <li class="clearfix" v-for="item in newestList" :key="item.id">
                      <div class="wi">
                        <a :href="'/announcement/' + item.id">
                          <img
                            :src="baseApiUrl + '/company-profile/' + item.imageUrl"
                            alt="recent post"
                            class="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div class="wb">
                        <a href="#">
                          {{ item.title }}
                        </a>
                        <span class="post-date">
                          {{ item.month }} {{ item.day }}, {{ item.year }}
                        </span>
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
                  <img :src="data.imageUrl" alt="article" class="img-fluid" />
                </div>
                <div class="post-wrapper">
                  <div class="post-header">
                    <h1 class="post-title">{{ data.title }}</h1>
                    <ul class="post-meta">
                      <li>{{ data.month }} {{ data.day }}, {{ data.year }}</li>
                    </ul>
                  </div>
                  <div class="post-content">
                    <p>
                      {{ data.description }}
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
import NavBar from "../../views/commons/NavBar";
import PageHeader from "../../views/commons/PageHeader";
import SiteFooter from "../../views/commons/SiteFooter";
import Copyright from "../../views/commons/Copyright";
import Breadcrumb from "../../views/commons/Breadcrumb";
import config from "../../config.js";

export default {
  name: "AnnouncementDetailPage",
  components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright },
  data: function () {
    return {
      newestList: [],
      data: {},
      crumbs: [
        { link: "/", name: "Home", isActive: false },
        { link: "/announcement", name: "Pengumuman", isActive: false },
        // { link: "#", name: "Blog Details left sidebar", isActive: true },
      ],
      baseApiUrl: config.baseApiUrl,
    };
  },
  async mounted() {
    const res = await this.$axios.get(`/company-profile/announcement?page=1&perPage=3`);
    if (res.data) {
      const normalize = res.data.data.reduce((acc, e) => {
        const publishDate = new Date(e.publish_at);
        const currentDate = new Date();
        const isShow = publishDate.getTime() <= currentDate.getTime();
        if (isShow) {
          const year = publishDate.getFullYear();
          const month = publishDate.toLocaleString("id-ID", { month: "short" });
          const day = publishDate.getDate();
          return [
            ...acc,
            {
              id: e.id,
              imageUrl: e.imageUrl,
              day: day,
              month: month,
              title: e.title,
              desc: e.description,
            },
          ];
        }
        return [...acc];
      }, []);
      this.newestList = normalize;

      const detail = await this.$axios(
        `/company-profile/announcement/${this.$route.params.slug}`
      );
      const currentDate = new Date(detail.data.publish_at);
      const year = currentDate.getFullYear();
      const month = currentDate.toLocaleString("id-ID", { month: "long" });
      const day = currentDate.getDate();

      this.data = {
        ...detail.data,
        year,
        month,
        day,
        imageUrl: this.baseApiUrl + "/company-profile/" + detail.data.imageUrl,
      };
      this.crumbs.push({
        link: "#",
        name: this.data.title,
        isActive: true,
      });
    }
  },
};
</script>
