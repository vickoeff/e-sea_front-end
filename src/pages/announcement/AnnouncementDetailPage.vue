<template>
  <div>
    <nav-bar />

    <div class="main">
      <page-header
        title="Pengumuman"
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
                    <li
                      class="clearfix"
                      v-for="item in newestList"
                      :key="item.id"
                    >
                      <router-link
                        class="ann-item"
                        :to="'/announcement/' + item.id"
                      >
                        <div class="wi">
                          <img
                            :src="
                              baseApiUrl + '/company-profile/' + item.imageUrl
                            "
                            alt="recent post"
                            class="img-fluid rounded"
                          />
                        </div>
                        <div class="wb">
                          {{ item.title }}
                          <span class="post-date">
                            {{ item.month }} {{ item.day }}, {{ item.year }}
                          </span>
                        </div>
                      </router-link>
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
                    :src="data.imageUrl"
                    alt="article"
                    class="img-fluid"
                  />
                </div>
                <div class="post-wrapper">
                  <div class="post-header">
                    <h1 class="post-title">{{ data.title }}</h1>
                    <ul class="post-meta">
                      <li>
                        {{ data.start_month }} {{ data.start_day }},
                        {{ data.start_year }}
                      </li>
                      <li>
                        {{ data.end_month }} {{ data.end_day }},
                        {{ data.end_year }}
                      </li>
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
import NavBar from '../../views/commons/NavBar'
import PageHeader from '../../views/commons/PageHeader'
import SiteFooter from '../../views/commons/SiteFooter'
import Copyright from '../../views/commons/Copyright'
import Breadcrumb from '../../views/commons/Breadcrumb'
import config from '../../config.js'

export default {
  name: 'AnnouncementDetailPage',
  components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright },
  data: function () {
    return {
      newestList: [],
      data: {},
      crumbs: [
        { link: '/', name: 'Home', isActive: false },
        { link: '/announcement', name: 'Pengumuman', isActive: false }
        // { link: "#", name: "Blog Details left sidebar", isActive: true },
      ],
      baseApiUrl: config.baseApiUrl
    }
  },
  computed: {
    annId() {
      return this.$route.params.slug
    }
  },
  watch: {
    annId() {
      this.getDetailData()
    }
  },
  async mounted() {
    const res = await this.$axios.get(
      `/company-profile/announcement?page=1&perPage=3`
    )
    if (res.data) {
      const normalize = res.data.data.reduce((acc, e) => {
        const eventStart = new Date(e.event_start_at)
        const currentDate = new Date()
        const isShow =
          new Date(e.event_end_at).getTime() >= currentDate.getTime()
        if (isShow) {
          const year = eventStart.getFullYear()
          const month = eventStart.toLocaleString('id-ID', { month: 'short' })
          const day = eventStart.getDate()
          return [
            ...acc,
            {
              id: e.id,
              imageUrl: e.imageUrl,
              day: day,
              month: month,
              title: e.title,
              desc: e.description
            }
          ]
        }
        return [...acc]
      }, [])
      this.newestList = normalize

      await this.getDetailData()
    }
  },
  methods: {
    async getDetailData() {
      const detail = await this.$axios(
        `/company-profile/announcement/${this.annId}`
      )
      const eventStart = new Date(detail.data.event_start_at)
      const start_year = eventStart.getFullYear()
      const start_month = eventStart.toLocaleString('id-ID', { month: 'long' })
      const start_day = eventStart.getDate()

      const eventEnd = new Date(detail.data.event_end_at)
      const end_year = eventEnd.getFullYear()
      const end_month = eventEnd.toLocaleString('id-ID', { month: 'long' })
      const end_day = eventEnd.getDate()

      this.data = {
        ...detail.data,
        start_year,
        start_month,
        start_day,
        end_year,
        end_month,
        end_day,
        imageUrl: this.baseApiUrl + '/company-profile/' + detail.data.imageUrl
      }
      if (this.crumbs[2]) {
        this.crumbs[2].name = detail.data.title
      } else {
        this.crumbs.push({
          link: '#',
          name: detail.data.title,
          isActive: true
        })
      }
    }
  }
}
</script>

<style scoped>
.post-meta > li:not(:last-child):after {
  content: '-' !important;
}
.ann-item {
  cursor: pointer;
  padding: 8px;
  color: #788487 !important;
}
.ann-item:hover {
  box-shadow: 0px 0px 10px #d7d9da;
}
</style>
