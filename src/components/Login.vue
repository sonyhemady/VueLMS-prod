<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel brown darken-1 white-text center">
                        <h3>Login</h3>
                        <form>
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="text" id="email">
                                <label class="white-text" for=email>Email</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <button class="btn btn-large grey lighten-4 black-text">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {};
  }
};
</script>
