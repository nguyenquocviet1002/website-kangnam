<?php
    $path = get_template_directory_uri();
    $path = $path.'/Module/Post/regist_1_0_1';
?>
<form class="regist_1_0_1" id="regist_1_0_1">
    <div class="regist_1_0_1__tt font">Đặt lịch tư vấn cùng chuyên gia</div>
    <article>
        <div>
            <div style="display:none">
                <input id="iemail" name="iemail" type="textbox" placeholder="Email:">
                <input id="gclid_field" name="referred" value="">
                <input id="code_campaign" name="code_campaign" value="513588630">
                <input id="name_campaign" name="name_campaign" value="[Kangnam] Bệnh Viện Thẩm Mỹ Kangnam Tư Vấn">
                <input id="first_link" name="first_link" value="">
                <input id="website" name="website" value="">
                <input id="location" name="location" value="">
            </div>
            <div class="form-group">
                <input id="iname" name="iname" type="textbox" placeholder="Họ tên*:">
                <div class="form-message"></div>
            </div>
            <div class="form-group">
                <input id="imob" name="imob" type="textbox" placeholder="Điện thoại*:">
                <div class="form-message"></div>
            </div>
            <div class="form-group">
                <textarea id="inote" name="inote" placeholder="Nhu cầu tư vấn"></textarea>
                <div class="form-message"></div>
            </div>
            <div class="form-group">
                <textarea style="display:none;" id="itext" name="itext" placeholder="Nhu cầu tư vấn"></textarea>
                <div class="form-message"></div>
            </div>            
        </div>
        <div>
            <input class="regist_1_0_1__Sent" type="submit" value="Đăng ký ngay">
            <div class="regist_1_0_1__note">tư vấn 24/7 hotline: 1900.6466</div>
        </div>
    </article>
</form>