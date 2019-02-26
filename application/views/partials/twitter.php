<li>
    <div class="flex-container">
        <div class="profile">
            <a href="<?=$author->link?>" class="user">
                <img src="<?=$author->profile->picture?>" alt="<?=$author->name?>"/>
            </a>
        </div>
        <div class="tweet">
            <?=$text_html?>
        </div>
    </div>
    <div class="link">
        <a href="<?=$link?>" rel="nofollow"><?=$datetime?></a>
    </div>
</li>