<template>
  <div>
    <nav-bar />

    <div class="main">
      <page-header title="Pengumuman" subtitle="" />
      <breadcrumb :crumbs="crumbs" />

      <section class="our-blog-section ptb-100">
        <div class="container" id="content">
          <div class="row">
            <div v-for="blog in blogs" :key="blog.id" class="col-md-6 col-lg-4">
              <small-blog-item
                :id="blog.id"
                :image-url="baseApiUrl + '/company-profile/' + blog.imageUrl"
                :comments="blog.comments"
                :shares="blog.shares"
                :day="blog.day"
                :month="blog.month"
                :title="blog.title"
                :desc="blog.desc"
                :is-gray="true"
              />
            </div>
          </div>

          <!--pagination start-->
          <div class="row">
            <div class="col-md-12">
              <nav class="custom-pagination-nav mt-4">
                <ul class="pagination justify-content-center">
                  <li :class="['page-item', !meta.prev ? 'disabled' : '']" @click="prev">
                    <a class="page-link" href="#content">
                      <span class="ti-angle-left"></span>
                    </a>
                  </li>
                  <li
                    v-for="item in paginations"
                    :class="['page-item', page === item ? 'active' : '']"
                    :key="item"
                    @click="current(item)"
                  >
                    <a class="page-link" href="#content">
                      {{ item }}
                    </a>
                  </li>

                  <li :class="['page-item', !meta.next ? 'disabled' : '']" @click="next">
                    <a class="page-link" href="#content">
                      <span class="ti-angle-right"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!--pagination end-->
        </div>
      </section>
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
import SmallBlogItem from "../../components/SmallBlogItem";
import config from "../../config";

export default {
  name: "AnnouncementPage",
  components: {
    Breadcrumb,
    SiteFooter,
    PageHeader,
    NavBar,
    Copyright,
    SmallBlogItem,
  },
  data: function () {
    return {
      crumbs: [
        { link: "/", name: "Home", isActive: false },
        { link: "#", name: "Pengumuman", isActive: true },
      ],
      blogs: [
        {
          id: 1,
          imageUrl: "assets/img/blog/1.jpg",
          day: 24,
          month: "Apr",
          comments: 45,
          shares: 10,
          title: "Appropriately productize fully",
          desc:
            "Some quick example text to build on the card title and make up the bulk.",
        },
        {
          id: 2,
          imageUrl: "assets/img/blog/2.jpg",
          day: 24,
          month: "Apr",
          comments: 45,
          shares: 10,
          title: "Quickly formulate backend",
          desc:
            "Synergistically engage effective ROI after customer directed partnerships.",
        },
      ],
      page: 1,
      perPage: 4,
      meta: {},
      baseApiUrl: config.baseApiUrl,
      paginations: [],
    };
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$axios.get(
        `/company-profile/announcement?page=${this.page}&perPage=${this.perPage}`
      );
      if (res.data) {
        const normalize = res.data.data.reduce((acc, e) => {
          const eventStart = new Date(e.event_start_at);
          const currentDate = new Date();
          const isShow = new Date(e.event_end_at).getTime() >= currentDate.getTime();

          const year = eventStart.getFullYear();
          const month = eventStart.toLocaleString("id-ID", {
            month: "short",
          });
          const day = eventStart.getDate();
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
        }, []);
        const pagePreparation = new Array(res.data.meta.lastPage)
          .fill(null)
          .map((_, i) => {
            return i + 1;
          });
        this.blogs = normalize;
        this.meta = res.data.meta;
        this.paginations = pagePreparation;
      }
    },
    async next() {
      if (!this.meta.next) return;
      this.page++;
      await this.getData();
    },
    async prev() {
      if (!this.meta.prev) return;
      this.page--;
      await this.getData();
    },
    async current(page) {
      this.page = page;
      await this.getData();
    },
  },
};
</script>
