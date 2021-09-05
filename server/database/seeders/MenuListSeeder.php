<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MenuList;

class MenuListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MenuList::create([
            'icon' => "FaChartPie",
            'label' => 'Dashboard',
            'link' => "/dashboard",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaCommentAlt",
            'label' => 'Enquiries',
            'link' => "/enquiries",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaNewspaper",
            'label' => 'Testimonials',
            'link' => "/testimonials",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaRegFileAlt",
            'label' => 'Pages',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaMapMarkerAlt",
            'label' => 'Destination',
            'link' => "/",
            'is_deleted' => 0,
        ]);


        //6
        MenuList::create([
            'icon' => "FaBookOpen",
            'label' => 'Bookings',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaMapMarkedAlt",
            'label' => 'Tour',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaPercent",
            'label' => 'Tour Coupon',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaConciergeBell",
            'label' => 'Tour Service',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaPlane",
            'label' => 'Tour Package',
            'link' => "/",
            'is_deleted' => 0,
        ]);


        //11
        MenuList::create([
            'icon' => "FaWpforms",
            'label' => 'Forms',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaPaintBrush",
            'label' => 'Appearance',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaUserAlt",
            'label' => 'Users',
            'link' => "/users",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaFolderOpen",
            'label' => 'File Manager',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaMoneyBill",
            'label' => 'Payment',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        //16
        MenuList::create([
            'icon' => "FaMoneyBill",
            'label' => 'Settings',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaMoneyBill",
            'label' => 'Earnings',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaRegCalendarAlt",
            'label' => 'Calendar',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaCloudUploadAlt",
            'label' => 'Upload',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaIdCard",
            'label' => 'Profile',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        //21
        MenuList::create([
            'icon' => "FaFileInvoiceDollar",
            'label' => 'Quotes',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaMapMarkerAlt",
            'label' => 'Booking Tracker',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaFolderOpen",
            'label' => 'Resources',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaRegCalendarAlt",
            'label' => 'Trip Reminders',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'icon' => "FaRegAddressBook",
            'label' => 'Customer Details',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        //26
        MenuList::create([
            'icon' => "FaCommentAlt",
            'label' => 'Messages',
            'link' => "/",
            'is_deleted' => 0,
        ]);
    }
}
