/*
应用名称：千本笔记 VIP 解锁
使用说明：请配合重写规则使用
*/

var body = JSON.parse($response.body);

// 针对你截图中的 result 结构进行修改
if (body.result) {
    body.result.isVip = true;
    body.result.isAiVip = true;
    body.result.vipFinishAt = 4092599349; // 2099年
    body.result.nickName = "尊贵的永久会员"; // 顺便帮客户改个名，增加爽感
}

$done({body: JSON.stringify(body)});
