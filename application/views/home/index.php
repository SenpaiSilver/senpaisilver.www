<div class="container">
    <section class="blog">
        <div>Latest blog posts</div>
        <ul>
            <?php foreach ($blog as $b): ?>
            <li style="background-image: url('<?=$b->featured[0]->thumbnails->medium?>');">
                <a href="<?=$b->link?>" class="title"><?=$b->title?> (<?=$b->datetime->date?>)</a>
                <article>
                    <?=$b->excerpt?>
                </article>
                <div class="readmore">
                    <a href="<?=$b->link?>">Read more...</a>
                </div>
            </li>
            <?php endforeach; ?>
        </ul>
    </section>

    <section class="social">
        <ul>
            <?php foreach ($timeline as $t): ?>
                <li>
                    <p><?=$t->text_html?></p>
                    <a href="<?=$t->link?>" rel="nofollow">Link</a>
                    <span class="icon twitter"></span>
                </li>
            <?php endforeach; ?>
        </ul>
    </section>
</div>
<!--
<ul class="twitter">
    <?php foreach ($timeline as $t): ?>
        <li>
            <p><?=$t->text_html?></p>
            <a href="<?=$t->link?>" rel="nofollow">Link</a>
            <span class="icon twitter"></span>
        </li>
    <?php endforeach; ?>
</ul> -->
<hr style="clear: both;"/>