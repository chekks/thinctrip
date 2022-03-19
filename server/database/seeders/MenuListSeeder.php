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
            'id' => 1,
            'icon' => "FaChartPie",
            'label' => 'Dashboard',
            'link' => "/dashboard",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 2,
            'icon' => "FaCommentAlt",
            'label' => 'Enquiries',
            'link' => "/enquiries",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 3,
            'icon' => "FaNewspaper",
            'label' => 'Testimonials',
            'link' => "/testimonials",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 4,
            'icon' => "FaRegFileAlt",
            'label' => 'Pages',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 5,
            'icon' => "FaMapMarkerAlt",
            'label' => 'Destination',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 6,
            'icon' => "FaBookOpen",
            'label' => 'Bookings',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 7,
            'icon' => "FaMapMarkedAlt",
            'label' => 'Tour',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 8,
            'icon' => "FaPercent",
            'label' => 'Tour Coupon',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 9,
            'icon' => "FaConciergeBell",
            'label' => 'Tour Service',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 10,
            'icon' => "FaPlane",
            'label' => 'Tour Package',
            'link' => "/",
            'is_deleted' => 0,
        ]);


        MenuList::create([
            'id' => 11,
            'icon' => "FaWpforms",
            'label' => 'Forms',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 12,
            'icon' => "FaPaintBrush",
            'label' => 'Appearance',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 13,
            'icon' => "FaUserAlt",
            'label' => 'Users',
            'link' => "/users",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 14,
            'icon' => "FaFolderOpen",
            'label' => 'File Manager',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 15,
            'icon' => "FaMoneyBill",
            'label' => 'Payment',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 16,
            'icon' => "FaMoneyBill",
            'label' => 'Settings',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 17,
            'icon' => "FaMoneyBill",
            'label' => 'Earnings',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 18,
            'icon' => "FaRegCalendarAlt",
            'label' => 'Calendar',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 19,
            'icon' => "FaCloudUploadAlt",
            'label' => 'Upload',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 20,
            'icon' => "FaIdCard",
            'label' => 'Profile',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 21,
            'icon' => "FaFileInvoiceDollar",
            'label' => 'Quotes',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 22,
            'icon' => "FaMapMarkerAlt",
            'label' => 'Booking Tracker',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 23,
            'icon' => "FaFolderOpen",
            'label' => 'Resources',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 24,
            'icon' => "FaRegCalendarAlt",
            'label' => 'Trip Reminders',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 25,
            'icon' => "FaRegAddressBook",
            'label' => 'Customer Details',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        //26
        MenuList::create([
            'id' => 26,
            'icon' => "FaCommentAlt",
            'label' => 'Messages',
            'link' => "/",
            'is_deleted' => 0,
        ]);

        MenuList::create([
            'id' => 27,
            'icon' => "FaMapMarkerAlt",
            'label' => 'Trips',
            'link' => "/",
            'is_deleted' => 0,
        ]);


        MenuList::create([
            'id' => 28,
            'icon' => "",
            'label' => 'Share your tour',
            'link' => "/share-your-tour",
            'is_deleted' => 0,
        ]);


        MenuList::create([
            'id' => 29,
            'icon' => "",
            'label' => 'Submitted Tours',
            'link' => "/submitted-tours",
            'is_deleted' => 0,
        ]);
    }
}
