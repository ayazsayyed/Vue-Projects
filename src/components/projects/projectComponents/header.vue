<template>
  <div>
    <header class="navbar navbar-expand navbar-dark flex-row align-items-md-center ct-navbar">
      <a
        class="navbar-brand mr-0 mr-md-2"
        href="../../docs/getting-started/overview.html"
        aria-label="Bootstrap"
      >
         My Projects

      </a>
      <ul class="navbar-nav flex-row mr-auto ml-4 d-none d-md-flex">
        <li class="nav-item">
          <a class="nav-link" href="../../index.html">Live Preview</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/creativetimofficial/argon-design-system/issues"
            target="_blank"
          >Support</a>
        </li>
      </ul>
      <div class="d-none d-sm-block ml-auto">
        <ul class="navbar-nav ct-navbar-nav flex-row align-items-center">
          <li class="nav-item dropdown d-none">
            <a
              class="btn-link text-white dropdown-toggle mr-sm-3"
              href="#"
              id="ct-versions"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >1.0.1</a>
            <div class="dropdown-menu" aria-labelledby="ct-versions">
              <a class="dropdown-item active" href="../..//docs/1.0.1/">Latest - 1.0.1</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.facebook.com/creativetim"
              target="_blank"
            >
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://twitter.com/creativetim"
              target="_blank"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/creativetimofficial"
              target="_blank"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/creativetimofficial"
              target="_blank"
            >
              <i class="fa fa-dribbble"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://github.com/creativetimofficial"
              target="_blank"
            >
              <i class="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <a
        href="https://www.creative-tim.com/product/argon-design-system"
        target="_blank"
        class="btn btn-neutral btn-icon ml-sm-3 d-none d-md-block"
      >
        <span class="btn-inner--icon">
          <i class="fa fa-cloud-download mr-2"></i>
        </span>
        <span class="nav-link-inner--text">Download</span>
      </a>
      <button
        class="navbar-toggler ct-search-docs-toggle d-block d-md-none ml-auto ml-sm-0"
        type="button"
        data-toggle="collapse"
        data-target="#ct-docs-nav"
        aria-controls="ct-docs-nav"
        aria-expanded="false"
        aria-label="Toggle docs navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
</style>
