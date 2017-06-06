<?PHP
//หากมีการเรียกไฟล์นี้โดยตรง
if (eregi("core.php",$PHP_SELF)) 
{
	Header("Location: 500.html");
	die();
}
require_once "configs/db_config.php";//เรียกไฟล์ ค่าติดตั้ง ฐานข้อมูล Oracle
require_once "libs/class.mysql.php";//เรียก class MySQL

$db = New DB(); //เริ่มคลาดใหม่ในการเชื่อมต่อฐานข้อมูล
$db->connectdb($db_host,$db_name,$db_user,$db_pass);

require_once "configs/system_config.php"; //ค่าติดตั้งระบบโปรแกรม
require_once "configs/define_config.php"; //แทนค่าต่างๆ เพื่อความสะดวกในการใช้งาน
require_once LIBS."func_security.php"; //เรียก Libary รักษาความปลอดภัยต่างๆ
require_once LIBS."func_enc_dec.php"; //เรียกฟังค์ชั่น enc และ dec มา
require_once LIBS."func_get.php";
require_once LIBS."inc_chkuser.php"; //ตรวจสอบการเข้าใช้ระบบ

?>