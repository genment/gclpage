$(function(){
    $(".item-btn").click(function(){
        layer.open({
          type: 1,
          title: false,
          closeBtn: 0,
          area: ['600px', '500px'],
          skin: 'layui-layer-nobg', //没有背景色
          shadeClose: true,
          content: '<img style="width:100%;height:100%;" src="'+$(this).attr("img-url")+'" alt="" />'
        });
    })
})