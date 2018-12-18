$(document).ready(function()
{
    var add = $('#add');
    var div_list = $('#centr1');
    var spisok = $('#list');

    $('#button').on('click',function()
    {
        if(add.val())
        {
            if(div_list.children().length>1)
            {
                $('p').remove();
            }
            var item = add.val();
            $('#add').val('');
            $('#list').append('<li><span>'+item+'</span><button> Удалить </button></li>');
            
            $(document).on('click','li > button',function(e)
            {
               $(this).parent().remove();
               if(spisok.children().length<1&&div_list.children().length<2)
                {
                    $('#centr1').append('<p>Список пуст</p>');
                }
            });
        }
    });
});