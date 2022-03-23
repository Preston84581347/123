<script>
    var allowedreferrer = "https://htmlweb.ru/java/example.php";
    if (document.referrer.indexOf(allowedreferrer) == -1) {
    alert("Доступ на эту страницу возможен только с " + allowedreferrer);
    window.location.href=allowedreferrer;
}
</script>
