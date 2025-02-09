<script>
import { contacts } from "~/store/contact/contact";

export default {
  data() {
    return {
        contacts,
    };
  },
  computed: {
    localizedSlides() {
      const lang = this.$i18n.locale;
      return this.contacts.map((item) => ({
        title: lang === "en" ? item.title_en : item.title_kh,
        description: lang === "en" ? item.desc_en : item.desc_kh,
      }));
    },
  },
};
</script>