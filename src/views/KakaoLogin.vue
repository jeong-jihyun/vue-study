<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin"
      ><img src="../assets/kakao_login_small.png" alt=""
    /></a>
  </div>
</template>
<script>
export default {
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: "https://developers.kakao.com/tool/demo/oauth",
      });

      this.displayToken();
    },
    displayToken() {
      const token = this.getCookie("authorize-access-token");
      if (token) {
        window.Kakao.Auth.setAccessToken(token);
        window.Kakao.Auth.getStatusInfo()
          .then(function (res) {
            if (res.status === "connected") {
              console.log("token-result").innerText =
                "login success, token: " + window.Kakao.Auth.getAccessToken();
            }
          })
          .catch(() => {
            window.Kakao.Auth.setAccessToken(null);
          });
      }
    },
    getCookie(name) {
      const parts = document.cookie.split(name + "=");
      if (parts.length === 2) {
        return parts[1].split(";")[0];
      }
    },
    // getKakaoAccount(){
    //     window.Kakao.API.request({
    //         url:'/v2/user/me',
    //         success:(res)=>{
    //             console.log(res);
    //             //const kakao_account = res.kakao_account;
    //         }
    //     })
    // }
  },
};
</script>
