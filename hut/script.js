$.getJSON('pizza.json', function(data){
    let menu = data.menu;
    console.log(menu);
    $.each(menu, function(i, data){
        $('#daftar-menu').append('<div class="card m-3" style="width: 18rem;"><img src="img/pizza/'+data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+ data.deskripsi +'</p><h3>45.000</h3><a href="#" class="btn btn-primary">Go somewhere</a></div></div>');
    })
})

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});