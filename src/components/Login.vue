<template>
    <div class="container mt-5" style="width: 24em; border: 2px solid #999; border-radius: 5px;">
    <form action="@{/app/login}" method="post" class="form-group" id="loginForm">
        <div class="mt-2">
            <label for="usernameId">User Name :</label>
            <input type="text" name="username" class="form-control" id="usernameId"/>
        </div>
        <div class="mt-2">
            <label for="passwordId"> Password:</label>
            <input type="password" name="password" class="form-control" id="passwordId"/> </div>
        <div class="row mt-4 mb-2">
            <div class="col-sm-3"><input type="submit" value="Sign In" class="btn btn-success"/></div>
            <div class="col-sm d-flex justify-content-around align-items-center">
                <span>Still not registered?</span>
                <a href="/registration">Register here</a>
            </div>
        </div>
    </form>
</div>
</template>

<script>

</script>

<style>
    #loginForm>div>label{
        float: left;
        text-align: left;
    }
</style>
