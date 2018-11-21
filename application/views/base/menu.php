<ul class="menu">
    <?php foreach ($badges_url as $title => $url): ?>

    <li>
        <a href="<?=$url?>">
            <span><?=$title?></span>
        </a>
    </li>

    <?php endforeach; ?>
</ul>