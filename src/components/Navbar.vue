 <template>
  <nav>
      <div class="nav-wrapper teal">
        <div class="container">
          <router-link to="/" class="brand-logo">Library Management System</router-link>
          <ul class="right">
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/">Catalog</router-link></li>  
            <li><router-link to="/">Patrons</router-link></li>  
            <li><router-link to="/">Branches</router-link></li>  
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>         
          </ul>
        </div>
      </div>
    </nav>
  </template>