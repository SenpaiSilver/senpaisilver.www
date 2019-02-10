<li>
    <div class="flex-container">
        <div class="profile">
            <a href="<?=$author->link?>" class="user">
                <img src="<?=$author->profile->picture?>" alt="<?=$author->name?>"/>
            </a>

            <!-- <a href="<?=$link?>" rel="nofollow" class="link">
                <span class="icon twitter"></span>
            </a> -->
        </div>
        <div class="tweet">
            <?=$text_html?>
            <!-- <div>
                <a href="<?=$link?>" rel="nofollow"><span class="icon twitter"></span>Link</a>
            </div> -->
        </div>
    </div>
    <div class="link">
        <a href="<?=$link?>" rel="nofollow"><?=$datetime?></a>
    </div>
</li>