<p>Hello World!</p>

<ul class="twitter">
    <?php foreach ($timeline as $t): ?>
        <li>
            <p><?=$t->text_html?></p>
            <a href="<?=$t->link?>" rel="nofollow">Link</a>
            <span class="icon twitter"></span>
        </li>
    <?php endforeach; ?>
</ul>

<ul>
    <?php foreach (range(0, 64) as $e): ?>
    <li><?=$e?></li>
    <?php endforeach; ?>
</ul>